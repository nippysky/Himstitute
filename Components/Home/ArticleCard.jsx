import classes from "../Styles/Articles.module.css";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ArticleCard(props) {
  const { image, title, aurthorImage, aurthor, excerpt, article } = props;
  const excerptText = excerpt.substring(0, 100);
  return (
    <section className={classes.card}>
      <div className={classes.mainImage}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          objectFit="cover"
        />
      </div>

      <div className={classes.aurthor}>
        <Image src={aurthorImage} alt={aurthor} width={100} height={100} />
      </div>

      <div className={classes.small}>
        <h2>{title}</h2>
        <small>{aurthor}</small>
      </div>

      <div className={classes.text}>
        <p>{excerptText}</p>
      </div>

      <div className={classes.readMore}>
        <Link href={article}>
          <a>
            <span style={{ color: "#1AD84F" }}>Read Full Article</span>
            <span style={{ position: "relative", top: "5px", left: "5px" }}>
              <HiArrowNarrowRight size={20} />
            </span>
          </a>
        </Link>
      </div>
    </section>
  );
}
