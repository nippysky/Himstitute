import Link from "next/link";
import classes from "./Styles/ButtonGreen.module.css";

export default function ButtonGreen(props) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}
