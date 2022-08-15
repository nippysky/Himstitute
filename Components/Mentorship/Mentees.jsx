import classes from "../Styles/Mentees.module.css";
import MenteeDetails from "./MenteeDetails";
import Image from "next/image";
import ButtonWhite from "../ButtonWhite";

export default function Mentees() {
  return (
    <section className={classes.section}>
      <div>
        <h1>Our Mentees</h1>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <MenteeDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="John Doe"
            discipline="MBBS"
            level="500 Level"
            school="Uni Jos"
          />
        </div>

        <div className={classes.column}>
          <MenteeDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="John Doe"
            discipline="MBBS"
            level="500 Level"
            school="Uni Jos"
          />
        </div>

        <div className={classes.column}>
          <MenteeDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="John Doe"
            discipline="MBBS"
            level="500 Level"
            school="Uni Jos"
          />
        </div>

        <div className={classes.column}>
          <MenteeDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="John Doe"
            discipline="MBBS"
            level="500 Level"
            school="Uni Jos"
          />
        </div>

        <div className={classes.column}>
          <MenteeDetails
            image="/images/homepage/Steve_Rogers.svg"
            name="John Doe"
            discipline="MBBS"
            level="500 Level"
            school="Uni Jos"
          />
        </div>
      </div>

      <div className={classes.smallDiv}>
        <div className={classes.smallDivCol}>
          <div style={{ float: "left" }}>
            <Image
              src="/images/homepage/Himstitute_Joinus.png"
              alt="join Himstitute"
              width={450}
              height={300}
            />
          </div>
        </div>

        <div className={classes.smallDivCol}>
          <h2 style={{ textAlign: "left" }}>
            Join the <span style={{ color: "#1AD84F" }}>HIMSTITUTE</span>{" "}
            mentorship program today and unleash your potentials.
          </h2>
          <div style={{ textAlign: "left", marginTop: "2rem" }}>
            <ButtonWhite link="/">Enrol Now</ButtonWhite>
          </div>
        </div>
      </div>
    </section>
  );
}
