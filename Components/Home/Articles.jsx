import classes from "../Styles/Articles.module.css";
import ArticleCard from "./ArticleCard";
import ButtonWhite from "../ButtonWhite";

export default function Articles() {
  return (
    <section className={classes.section}>
      <div className={classes.headDiv}>
        <h1>Featured Research Articles</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua. Amet minim
          mollit non deserunt ullamco est sit aliqua. Amet minim mollit non
          deserunt ullamco est sit aliqua. Amet minim mollit non deserunt. Amet
          minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
          non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
          ullamco est sit aliqua. Amet minim mollit non deserunt.
        </p>
      </div>

      <div className={classes.row}>
        <div className={classes.column}>
          <ArticleCard
            image="/images/homepage/surgery.png"
            title="Lorem and Ipsum in medicine"
            aurthorImage="/images/homepage/PP.svg"
            aurthor="Tom Hanks"
            excerpt="Amet minim mollit non met minim mollit non deserunt. Amet
            minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
            non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua. Amet minim mollit non deserunt."
            article="/"
          />
        </div>
        <div className={classes.column}>
          <ArticleCard
            image="/images/homepage/surgery.png"
            title="Lorem and Ipsum in medicine"
            aurthorImage="/images/homepage/PP.svg"
            aurthor="Tom Hanks"
            excerpt="Amet minim mollit non met minim mollit non deserunt. Amet
            minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
            non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua. Amet minim mollit non deserunt."
            article="/"
          />
        </div>
        <div className={classes.column}>
          <ArticleCard
            image="/images/homepage/surgery.png"
            title="Lorem and Ipsum in medicine"
            aurthorImage="/images/homepage/PP.svg"
            aurthor="Tom Hanks"
            excerpt="Amet minim mollit non met minim mollit non deserunt. Amet
            minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
            non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua. Amet minim mollit non deserunt."
            article="/"
          />
        </div>
        <div className={classes.column}>
          <ArticleCard
            image="/images/homepage/surgery.png"
            title="Lorem and Ipsum in medicine"
            aurthorImage="/images/homepage/PP.svg"
            aurthor="Tom Hanks"
            excerpt="Amet minim mollit non met minim mollit non deserunt. Amet
            minim mollit non deserunt ullamco est sit aliqua. Amet minim mollit
            non deserunt ullamco est sit aliqua. Amet minim mollit non deserunt
            ullamco est sit aliqua. Amet minim mollit non deserunt."
            article="/"
          />
        </div>
      </div>

      <div className={classes.btn}>
        <ButtonWhite link="/">View All Articles</ButtonWhite>
      </div>
    </section>
  );
}
