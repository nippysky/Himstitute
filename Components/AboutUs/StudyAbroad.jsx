import Image from "next/image";
import ButtonWhite from "../ButtonWhite";
import classes from "../Styles/WhatWeOffer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function StudyAbroad() {
  const mobileView = useMediaQuery("(max-width:1000px)");
  return (
    <section>
      <div
        style={mobileView ? { flexDirection: "column-reverse" } : null}
        className={classes.row}
      >
        <div className={classes.column}>
          <h2>Study Abroad</h2>
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
        <div className={classes.column}>
          <Image
            src="/images/aboutus/AboutMentor.png"
            alt="Join Us"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
