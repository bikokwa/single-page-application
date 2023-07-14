import { Link } from "react-router-dom";
import classes from "../components/EventsList.module.css";

const events = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

const EventsPage = () => {
  return (
    <>
      <main className={classes.events}>
        <h1>My Events</h1>
        <ul className={classes.list}>
          {events.map((event) => (
            <li key={event.id} className={classes.item}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default EventsPage;
