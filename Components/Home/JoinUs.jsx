import classes from "../Styles/JoinUs.module.css";
import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column}>
          <Image
            src="/images/homepage/Himstitute_Joinus.png"
            alt="Join Us"
            width={500}
            height={500}
          />
        </div>
        <div className={classes.column}>
          <h1>
            Join <span style={{ color: "#1AD84F" }}>HIMSTITUTE</span> today and
            unleash your potentials
          </h1>
          <p>
            Our mentors at HIMSTITUTE amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Our mentors at HIMSTITUTE
            amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam. Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Our mentors at HIMSTITUTE amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button className="btnPrimary">
              <Link href="/">Enrol Now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
