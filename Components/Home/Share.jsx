import classes from "../Styles/Share.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Share() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column}>
          <h1>
            Share your research articles with readers on
            <span style={{ color: "#1AD84F" }}> HIMSTITUTE</span>
          </h1>
          <p>
            HIMSTITUTE offers you the opportunity to get your research and
            articles reviewed by experts and published on this platform. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button className="btnPrimary">
              <Link href="/">Explore Now</Link>
            </button>
          </div>
        </div>

        <div className={classes.column}>
          <Image
            src="/images/homepage/Himstitute_Office.png"
            alt="Himstitute Office"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}