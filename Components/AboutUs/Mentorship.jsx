import Image from "next/image";
import ButtonWhite from "../ButtonWhite";
import classes from "../Styles/WhatWeOffer.module.css";

export default function Mentorship() {
  return (
    <section>
      <div className={classes.row}>
        <div className={classes.column}>
          <Image
            src="/images/aboutus/AboutMentor.png"
            alt="Join Us"
            width={500}
            height={400}
          />
        </div>
        <div className={classes.column}>
          <h2>Mentorship</h2>
          <p>
            HIMSTITUTE amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ButtonWhite link="/">Enrol Now</ButtonWhite>
          </div>
        </div>
      </div>
    </section>
  );
}
