import classes from "../Styles/WhyHimstitute.module.css";
import { BsPerson, BsHeadset, BsNewspaper } from "react-icons/bs";

export default function WhyHimstitute() {
  return (
    <section className={classes.section}>
      <div>
        <h1>
          Why are students using{" "}
          <span style={{ color: "#1AD84F" }}>HIMSTITUTE</span>?
        </h1>
        <p>
          Because amet minim mollit non deserunt ullamco est sit aliqua. Amet
          minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
          non deserunt ullamco est. Amet minim mollit non deserunt ullamco est
          sit aliqua. Amet minim mollit non deserunt ullamco est. Amet minim
          mollit non deserunt ullamco est sit aliqua. Amet minim mollit non
          deserunt ullamco est.
        </p>
      </div>

      {/* icon and text */}
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.div}>
            <span className={classes.icon}>
              <BsPerson size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Vetted once, eligible for life.
            </span>
          </div>

          <div className={classes.div}>
            <span className={classes.icon}>
              <BsHeadset size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Exclusive HIMSTITUTE support
            </span>
          </div>

          <div className={classes.div}>
            <span className={classes.icon}>
              <BsNewspaper size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Get your article published
            </span>
          </div>
        </div>

        {/* Second Column */}
        <div className={classes.column}>
          <div className={classes.div}>
            <span className={classes.icon}>
              <BsPerson size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Vetted once, eligible for life.
            </span>
          </div>

          <div className={classes.div}>
            <span className={classes.icon}>
              <BsHeadset size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Exclusive HIMSTITUTE support
            </span>
          </div>

          <div className={classes.div}>
            <span className={classes.icon}>
              <BsNewspaper size={35} />
            </span>
            <span style={{ fontWeight: "500" }}>
              Get your article published
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
