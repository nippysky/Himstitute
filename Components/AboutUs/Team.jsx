import classes from "../Styles/Team.module.css";
import TeamMembers from "./TeamMembers";

export default function Team() {
  return (
    <section className={classes.section}>
      <div style={{ textAlign: "center" }}>
        <h1>Meet Our Team</h1>
        <p>
          The group at HIMSTITUTE behind the successess working together to
          achieve the mission, vision and maintain the organnnization’s core
          values.
        </p>
      </div>

      <div className={classes.leaders}>
        <h1>Leadership</h1>

        <div className={classes.leadersDiv}>
          <div className={classes.leadTeam}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>

          <div className={classes.leadTeam}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>

          <div className={classes.leadTeam}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>Team Members</h1>

        <div className={classes.teamMembers}>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
        </div>

        <div className={classes.teamMembers}>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
        </div>

        <div className={classes.teamMembers}>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
          <div className={classes.members}>
            <TeamMembers
              image="/images/aboutus/Team.png"
              name="Full Name"
              linkedin="/"
              position="position"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
