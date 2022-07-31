import classes from "./Styles/Footer.module.css";

export default function Footer() {
  return (
    <section className={classes.section}>
      <div className={classes.row}>
        <div className={classes.column}>
          <h3 style={{ paddingBottom: "1.2rem" }}>Company</h3>
          <p>Blog</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Articles</p>
          <p>Mentorship</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={classes.column}>
          <h3 style={{ paddingBottom: "1.2rem" }}>Students</h3>
          <p>Study Abroad</p>
          <p>Student Login</p>
          <p>Get A Mentor</p>
          <p>Submit Article</p>
          <p>Alumni</p>
        </div>
        <div className={classes.column}>
          <h1 style={{ paddingBottom: "1.2rem", fontSize: "2rem" }}>
            HIMSTITUTE
          </h1>
          <p>ADDRESS: 18, Jimoh Ola Street, Lagos, Nigeria.</p>
        </div>
      </div>

      {/* Last row on the Footer Section */}

      <div className={classes.footLastRow}>
        <div className={classes.footSubscribe}>
          <h3 style={{ paddingBottom: "1.2rem" }}>
            Subscribe To Our Newsletter
          </h3>
          <form>
            <input
              style={{ padding: "1rem", width: "70%" }}
              type="text"
              placeholder="Enter Your Email Address"
            />
            <span>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white",
                  padding: "1rem",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Subscribe
              </button>
            </span>
          </form>
        </div>

        <div className={classes.footCopyright}>
          <p style={{ float: "right" }}>
            © HIMSTITUTE 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
