import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export default async function Home() {
  'use cache';
  cacheLife('hours');

  const response = await fetch(`${BASE_URL}/api/events`, {
    cache: "force-cache",
    headers: {
      Accept: "application/json",
    },
  });

  // 🔒 HARD GUARD — no more HTML parsing
  if (!response.ok) {
    throw new Error(
      `Events API failed: ${response.status} ${response.statusText}`
    );
  }

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    const text = await response.text();
    console.error("Non-JSON response:", text.slice(0, 200));
    throw new Error("API did not return JSON");
  }

  const { events }: { events: IEvent[] } = await response.json();

  return (
    <section>
      <h1 className="text-center">
        EVENT STATION <br />
        One stop event platform
      </h1>

      <p className="text-center mt-5">
        Events, Meetups & Conferences
      </p>

      <Button />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events?.length ? (
            events.map((event) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </ul>
      </div>
    </section>
  );
}
