import classes from "./Styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={classes.navRow}>
      {/* Navbar Logo */}
      <div className={classes.navLogo}>
        <h2>HIMSTITUTE</h2>
      </div>

      {/* Navbar Menu Links */}
      <div className={classes.navLinks}>
        <span className={classes.menuItems}>
          <Link href="/">Home</Link>
        </span>
        <span className={classes.menuItems}>
          <Link href="/about-us">About Us</Link>
        </span>
        <span className={classes.menuItems}>
          <Link href="/mentorship">Mentorship</Link>
        </span>
        <span className={classes.menuItems}>
          <Link href="/study-abroad">Study Aborad</Link>
        </span>
        <span className={classes.menuItems}>
          <Link href="/articles">Articles</Link>
        </span>
        <span className={classes.menuItems}>
          <Link href="/careers">Careers</Link>
        </span>
      </div>

      {/* Navbar Button */}
      <div style={{ paddingTop: "0.2rem" }} className={classes.navButton}>
        <div>
          <button style={{ float: "right" }} className="btnPrimary">
            <Link href="/">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
