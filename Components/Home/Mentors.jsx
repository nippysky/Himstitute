import classes from "../Styles/Mentors.module.css";
import MentorDetails from "./MentorDetails";

export default function Mentors() {
  return (
    <section className={classes.section}>
      <h1>Meet Some of Our Mentors</h1>

      <div className={classes.row}>
        <div className={classes.column}>
          <MentorDetails
            image="/images/homepage/Peter_Parker.svg"
            name="Peter Parker"
            affiliation="Professor"
            discipline="Mentor"
            linkedin="/"
          />
        </div>
        <div className={classes.column}>
          <MentorDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="Steve Rogers"
            affiliation="Professor"
            discipline="Mentor"
            linkedin="/"
          />
        </div>
        <div className={classes.column}>
          <MentorDetails
            image="/images/homepage/Bruce_Banner.svg"
            name="Bruce Banner"
            affiliation="Professor"
            discipline="Mentor"
            linkedin="/"
          />
        </div>
        <div className={classes.column}>
          <MentorDetails
            image="/images/homepage/Clint_Barton.svg"
            name="Clint Barton"
            affiliation="Professor"
            discipline="Mentor"
            linkedin="/"
          />
        </div>
        <div className={classes.column}>
          <MentorDetails
            image="/images/homepage/Tony_Stark.svg"
            name="Tony Stark"
            affiliation="Professor"
            discipline="Mentor"
            linkedin="/"
          />
        </div>
      </div>
    </section>
  );
}
