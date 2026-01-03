import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const { image, tags, agenda, ...event } =
      Object.fromEntries(formData.entries());

    let imageUrl: string | null = null;

    // Case 1: image is already a URL
    if (typeof image === "string" && image.startsWith("http")) {
      imageUrl = image;
    }

    // Case 2: image is a File
    if (image instanceof File) {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
              folder: "DevEvent",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    if (!imageUrl) {
      return NextResponse.json(
        { message: "Image is required (URL or File)" },
        { status: 400 }
      );
    }

    const parsedTags = tags ? JSON.parse(tags as string) : [];
    const parsedAgenda = agenda ? JSON.parse(agenda as string) : [];

    const createdEvent = await Event.create({
      ...event,
      image: imageUrl,
      tags: parsedTags,
      agenda: parsedAgenda,
    });

    return NextResponse.json(
      { message: "Event created successfully", event: createdEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error("EVENT CREATE ERROR:", error);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Events fetched successfully", events },
      { status: 200 }
    );
  } catch (error) {
    console.error("EVENT FETCH ERROR:", error);
    return NextResponse.json(
      {
        message: "Event fetching failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
