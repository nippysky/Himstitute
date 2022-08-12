import Link from "next/link";
import classes from "./Styles/ButtonTrans.module.css";

export default function ButtonTrans(props) {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}
