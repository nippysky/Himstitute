import classes from "../styles/Pages.module.css";
import PageHeader1 from "../Components/PageHeader1";
import WhatWeOffer from "../Components/AboutUs/WhatWeOffer";
import MVV from "../Components/AboutUs/MVV";
import Team from "../Components/AboutUs/Team";
import Growth from "../Components/AboutUs/Growth";
import Partners from "../Components/Home/Partners";

export default function AboutUs() {
  return (
    <section>
      <PageHeader1 image="/images/aboutus/AboutHeader.png" text="WHO WE ARE" />

      <div className={classes.overview}>
        <h1>Overview</h1>
        <p>
          The primary aim of HIMSTITUTE is to enhance the mobility of Health
          Information Management, Health Informatics, Digital Health and other
          Allied Health Students and graduates to have access and opportunities
          to study abroad, mentorship and research. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <p>
          HIMSTITUTE amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. HIMSTITUTE amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
          mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>

      <WhatWeOffer />
      <MVV />
      <Team />
      <Growth />
      <Partners />
    </section>
  );
}
