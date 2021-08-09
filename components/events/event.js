import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import s from "./event.module.css";

function Event({ title, image, date, location, id }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={s.item}>
      <img src={"/" + image} alt="" />
      <div className={s.content}>
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
        </div>
        <div className={s.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={s.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Event;
