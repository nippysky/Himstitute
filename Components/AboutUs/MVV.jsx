import classes from "../Styles/MVV.module.css";
import Values from "./Values";

export default function MVV() {
  return (
    <section className={classes.section}>
      <div className="custom-shape-divider-top-1659705770">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className={classes.missVis}>
        <div className={classes.mission}>
          <h2>Mission Statement</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim
            mollit non deserunt ullamco est sit aliqua. Amet minim mollit non
            deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua.
          </p>
        </div>

        <div className={classes.vision}>
          <h2>Vision Statement</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim
            mollit non deserunt ullamco est sit aliqua. Amet minim mollit non
            deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua.
          </p>
        </div>
      </div>

      <section>
        <div className={classes.valuesHead}>
          <h1>We Are Driven By Our Values</h1>
        </div>

        <div className={classes.values}>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
        </div>

        <div style={{ padding: "0 8rem" }} className={classes.values}>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
          <div className={classes.valueItems}>
            <Values
              image="/images/aboutus/circle.svg"
              title="value 1"
              text="Amet minim mollit non deserunt ullamco est sit aliqua. "
            />
          </div>
        </div>
      </section>
    </section>
  );
}
