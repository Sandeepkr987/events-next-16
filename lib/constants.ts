export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; 
  time: string; 
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2026",
    slug: "react-summit-us-2026",
    location: "New Delhi, India",
    date: "2026-11-07",
    time: "11:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Agentic AI 2026",
    slug: "Agentic-AI-2026",
    location: "Pune, India",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent 2026",
    slug: "aws-reinvent-2026",
    location: "Bengluru, India",
    date: "2026-12-01",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    location: "Mumbai, India (Hybrid)",
    date: "2026-11-12",
    time: "09:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "New delhi, India",
    date: "2026-05-07",
    time: "07:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "ETHGlobal Hackathon: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Noida, India",
    date: "2026-07-10",
    time: "10:00 AM",
  },
  {
    image: "/images/event-full.png",
    title: "Open Source Summit 2026",
    slug: "oss-na-2026",
    location: "Gurgaon, India",
    date: "2026-06-22",
    time: "09:00 AM",
  },
];

export default events;