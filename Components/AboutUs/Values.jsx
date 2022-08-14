import Image from "next/image";
import classes from "../Styles/MVV.module.css";

export default function Values(props) {
  const { image, title, text } = props;
  return (
    <div className={classes.valuesDiv}>
      <Image src={image} alt={title} width={100} height={100} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
