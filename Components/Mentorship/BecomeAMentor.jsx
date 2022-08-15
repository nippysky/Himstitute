import ButtonWhite from "../ButtonWhite";
import classes from "../Styles/BecomeAComrade.module.css";
import Image from "next/image";

export default function BecomeAMentor() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column}>
          <h2>
            Are you passionate about students and young professionals? If yes,
            we welcome you to join our group of amazing mentors at HIMSTITUTE.
          </h2>
          <div style={{ marginTop: "2rem" }}>
            <ButtonWhite link="/">Become A Mentor</ButtonWhite>
          </div>
        </div>
        <div className={classes.column}>
          <div style={{ float: "right" }}>
            <Image
              src="/images/homepage/Himstitute_Joinus.png"
              alt="Join Us"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
