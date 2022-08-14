import classes from "../Styles/WhatWeOffer.module.css";
import Articles from "./Articles";
import Mentorship from "./Mentorship";
import StudyAbroad from "./StudyAbroad";

export default function WhatWeOffer() {
  return (
    <section className={classes.section}>
      <div className={classes.offer}>
        <h1>What We offer</h1>
      </div>

      <Mentorship />
      <StudyAbroad />
      <Articles />
    </section>
  );
}
