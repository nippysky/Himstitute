import classes from "../Styles/Partners.module.css";
import Image from "next/image";
import ButtonWhite from "../ButtonWhite";

export default function Partners() {
  return (
    <section className={classes.section}>
      <div className={classes.headDiv}>
        <h1>Our Partners</h1>
        <p>We are proud of our partners and supporters</p>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/McDonalds.svg"
            alt="McDonalds"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Microsoft.svg"
            alt="Microsoft"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Huawei.svg"
            alt="Huawei"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Beats.svg"
            alt="Beats"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Dole.svg"
            alt="Dole"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Amazon.svg"
            alt="Amazon"
            height={100}
            width={100}
            priority
          />
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Starbucks.svg"
            alt="Starbucks"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/NorthFace.svg"
            alt="NorthFace"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Green.svg"
            alt="Green"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Belle.svg"
            alt="Belle"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Dell.svg"
            alt="Dell"
            height={100}
            width={100}
            priority
          />
        </div>
        <div className={classes.column}>
          <Image
            src="/images/homepage/partners/Dyson.svg"
            alt="Dyson"
            height={100}
            width={100}
            priority
          />
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <ButtonWhite link="/">Partner With Us</ButtonWhite>
      </div>
    </section>
  );
}
