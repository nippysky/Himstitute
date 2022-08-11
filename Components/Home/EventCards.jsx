import classes from "../Styles/UpcomingEvents.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiAlarm, BiMap } from "react-icons/bi";

export default function EventCards(props) {
  const { image, title, date, time, location, text, link } = props;
  const excerpt = text.substring(0, 85);
  return (
    <div className={classes.parent}>
      <div className={classes.child0}>
        <hr></hr>
      </div>
      <div className={classes.child1}>
        <div>
          <Image src={image} alt={title} width={300} height={400} />
        </div>
      </div>

      <div className={classes.child2}>
        <h3>{title}</h3>

        {/* Date, time and location */}
        <div>
          <span className={classes.spanDiv}>
            <small>
              <span className={classes.iconDiv}>
                <BiCalendar size={12} />
              </span>
              {date}
            </small>
          </span>

          <span className={classes.spanDiv}>
            <small>
              <span className={classes.iconDiv}>
                <BiAlarm size={12} />
              </span>
              {time}
            </small>
          </span>

          <span>
            <small>
              <span className={classes.iconDiv}>
                <BiMap size={12} />
              </span>
              {location}
            </small>
          </span>
        </div>

        {/* excerpts */}
        <div>
          <p>{excerpt}</p>
        </div>

        {/* button */}
        <div>
          <button className="btnPrimary">
            <Link href={link}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
