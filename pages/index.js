import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage({ events }) {
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents)

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

