import PageHeader1 from "../Components/PageHeader1";
import classes from "../styles/Pages.module.css";
import Mentors from "../Components/Home/Mentors";
import BecomeAMentor from "../Components/Mentorship/BecomeAMentor";
import Mentees from "../Components/Mentorship/Mentees";
import Testimonials from "../Components/Home/Testimonials";
import Partners from "../Components/Home/Partners";

export default function Mentorship() {
  return (
    <section>
      <PageHeader1 image="/images/aboutus/AboutHeader.png" text="MENTORSHIP" />

      <div style={{ marginBottom: "-1rem" }} className={classes.overview}>
        <h1>
          The <span style={{ color: "#1AD84F" }}>HIMSTITUTE</span> Mentorship
          Program
        </h1>
        <p>
          The mentorship program at HIMSTITUTE amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Our mentors at
          HIMSTITUTE amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Our mentors at HIMSTITUTE amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>

      <Mentors />
      <BecomeAMentor />
      <Mentees />
      <Testimonials />
      <Partners />
    </section>
  );
}
