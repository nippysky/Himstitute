import classes from "./Styles/Navbar.module.css";
import Link from "next/link";
import ButtonWhite from "./ButtonWhite";

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

        {/* Navbar Button */}
        <div style={{ float: "right", marginTop: "-0.5rem" }}>
          <span className={classes.menuItems}>
            <Link href="/login">Login</Link>
          </span>
          <ButtonWhite link="/"> Register</ButtonWhite>
        </div>
      </div>
    </div>
  );
}
