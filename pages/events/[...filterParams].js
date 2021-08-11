import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-util";

function FilteredEventsPage({ filteredEvents, hasError, year, month }) {
  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid values. Please, check again!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for chosen values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const filterData = context.params.filterParams;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2025 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: year,
    month: month,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
      year: year,
      month: month,
    },
  };
}
