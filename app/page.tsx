import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

export default async function home () {

    // const response = await fetch('')
    // const {events} = await response.json()

    return(
           <section>
            <h1 className="text-center">EVENT STATION<br/>
            One stop event platform</h1>
            <p className="text-center mt-5">Events, Meetups & Conferences</p>
            <Button/>
             <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
           </section>
    )
}