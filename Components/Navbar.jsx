import classes from "./Styles/Navbar.module.css";
import Link from "next/link";
import ButtonWhite from "./ButtonWhite";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

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
        <span className={classes.menuItems}>
          <Link href="/membership">Membership</Link>
        </span>

        {/* Navbar Button */}
        <div style={{ float: "right", marginTop: "-0.3rem" }}>
          <span className={classes.menuItems}>
            <Link href="/login">Login</Link>
          </span>
          <span className={classes.menuItems}>
            <ButtonWhite link="/"> Register</ButtonWhite>
          </span>
        </div>

        {/* Hamburger Menu */}
        <div>
          <div>
            <div
              style={{ float: "right" }}
              className="hamburger"
              onClick={() => setShowMenu(true)}
            >
              <HiMenuAlt1 color="#1AD84F" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className="mobileNav"
        style={showMenu ? { display: "flex" } : null}
        onClick={() => setShowMenu(false)}
      >
        <div className="closeMenu" onClick={() => setShowMenu(false)}>
          <HiX color="#1AD84F" />
        </div>

        <div className="mobileLinks">
          <Link href="/">Home</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/aboutus">About Us</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/mentorship">Mentorship</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/study-abroad">Study Abroad</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/articles">Articles</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/career">Career</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/membership">Membership</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/login">Login</Link>
        </div>
        <div className="mobileLinks">
          <ButtonWhite link="/"> Register</ButtonWhite>
        </div>
      </div>
    </div>
  );
}
