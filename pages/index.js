import Head from "next/head";
import Articles from "../Components/Home/Articles";
import JoinUs from "../Components/Home/JoinUs";
import Mentors from "../Components/Home/Mentors";
import Partners from "../Components/Home/Partners";
import Share from "../Components/Home/Share";
import Study from "../Components/Home/Study";
import Summary from "../Components/Home/Summary";
import SummaryDiv from "../Components/Home/SummaryDiv";
import Testimonials from "../Components/Home/Testimonials";
import UpcomingEvents from "../Components/Home/UpcomingEvents";
import WhyHimstitute from "../Components/Home/WhyHimstitute";
import classes from "../styles/Home.module.css";
import NextJsCarousel from "../Components/Home/HeadCarousel";

export default function Home() {
  return (
    <section>
      <Head>
        <title>HIMSTITUTE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ margin: "0", padding: "0" }}>
        <NextJsCarousel />
      </div>

      <section className={classes.summary}>
        <Summary />
        <SummaryDiv />
      </section>

      <UpcomingEvents />
      <WhyHimstitute />
      <Testimonials />
      <Study />
      <JoinUs />
      <Mentors />
      <Articles />
      <Share />
      <Partners />
    </section>
  );
}
