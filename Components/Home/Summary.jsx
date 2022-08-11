import classes from "../Styles/Summary.module.css";
import SummaryDetails from "./SummaryDetails";

export default function Summary() {
  return (
    <div className={classes.row}>
      <div className={classes.column}>
        <SummaryDetails
          image="/images/homepage/Study-Abroad.svg"
          title="Study Abroad"
          details="Study amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est. "
          link="/"
        />
      </div>
      <div className={classes.column}>
        <SummaryDetails
          image="/images/homepage/Mentorship.svg"
          title="Mentorship"
          details="Study amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est. "
          link="/"
        />
      </div>
      <div className={classes.column}>
        <SummaryDetails
          image="/images/homepage/Articles.svg"
          title="Articles"
          details="Study amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt ullamco est. "
          link="/"
        />
      </div>
    </div>
  );
}
