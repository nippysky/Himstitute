import classes from "../Styles/Articles.module.css";
import ButtonWhite from "../ButtonWhite";
import ArticlesCard from "./ArticlesCard";

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

      <div>
        <div className={classes.row}>
          <div className={classes.column}>
            <ArticlesCard />
          </div>
          <div className={classes.column}>
            <ArticlesCard />
          </div>
          <div className={classes.column}>
            <ArticlesCard />
          </div>
          <div className={classes.column}>
            <ArticlesCard />
          </div>
        </div>
      </div>

      <div className={classes.btn}>
        <ButtonWhite link="/">View All Articles</ButtonWhite>
      </div>
    </section>
  );
}
