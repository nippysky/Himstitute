import Image from "next/image";
import classes from "../Styles/Summary.module.css";

export default function SummaryDiv() {
  return (
    <div className={classes.sumRow}>
      <div className={classes.sumColumn}>
        <p>
          At HIMSTITUTE we enhance the mobility of Health Information
          Management, Health Informatics, Digital Health and other Allied Health
          Students and graduates to have access and opportunities to study
          abroad, mentorship and research.
        </p>
        <p>
          At HIMSTITUTE we enhance the mobility of Health Information
          Management, Health Informatics, Digital Health and other Allied Health
          Students and graduates to have access and opportunities to study
          abroad, mentorship and research.
        </p>
        <p>
          At HIMSTITUTE we enhance the mobility of Health Information
          Management, Health Informatics, Digital Health and other Allied Health
          Students and graduates to have access and opportunities to study
          abroad, mentorship and research.
        </p>
      </div>
      <div className={classes.sumColumn}>
        <Image
          src="/images/homepage/Himstitute_Doctor.png"
          alt="A Doctor"
          height={400}
          width={500}
          priority
        />
      </div>
    </div>
  );
}
