import classes from "../Styles/Growth.module.css";
import ButtonGreen from "../ButtonGreen";
import Image from "next/image";

export default function Growth() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column}>
          <Image
            src="/images/homepage/Himstitute_Joinus.png"
            alt="Join Us"
            width={500}
            height={400}
          />
        </div>
        <div className={classes.column}>
          <h1>Our team is growing come join us on the journey</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam. Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ButtonGreen link="/">Join Us</ButtonGreen>
          </div>
        </div>
      </div>
    </section>
  );
}
