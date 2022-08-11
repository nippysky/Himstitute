import classes from "../Styles/Study.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Study() {
  return (
    <section className={classes.section}>
      <div>
        <h1>Study Anywhere In The World</h1>
        <Image
          src="/images/homepage/Map.svg"
          alt="Map"
          width={850}
          height={550}
        />
        <div>
          <button className="btnPrimary">
            <Link href="/">Explore Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
