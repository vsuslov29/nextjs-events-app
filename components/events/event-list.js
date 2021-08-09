import Event from "./event";
import s from './event-list.module.css';

function EventList({ events }) {
  return (
    <ul className={s.list}>
      {events.map((event) => (
        <Event
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
