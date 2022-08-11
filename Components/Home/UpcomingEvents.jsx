import classes from "../Styles/UpcomingEvents.module.css";
import EventCards from "./EventCards";

export default function UpcomingEvents() {
  return (
    <section className={classes.section}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1>Upcoming Events</h1>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <EventCards
            title="HIMSTITUTE and the future of Health Informatics."
            image="/images/homepage/Himstitute_Microscope.png"
            date="December, 25, 2022"
            time="04:00PM"
            location="Google Meet"
            text=" Amet minim mollit non deserunt ullamco est sit aliqua, met minim
            mollit non."
            link="/"
          />
        </div>
        <div className={classes.column}>
          <EventCards
            title="Education, the smart choice for the future."
            image="/images/homepage/Himstitute_Graduation.png"
            date="November 25, 2023"
            time="04:00PM"
            location="Google Meet"
            text=" Amet minim mollit non deserunt ullamco est sit aliqua, met minim
            mollit non."
            link="/"
          />
        </div>
      </div>
    </section>
  );
}
