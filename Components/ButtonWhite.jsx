import Link from "next/link";
import classes from "./Styles/ButtonWhite.module.css";

export default function ButtonWhite(props) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}
