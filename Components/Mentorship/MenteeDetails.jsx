import { lineHeight } from "@mui/system";
import Image from "next/image";
import classes from "../Styles/Mentees.module.css";

export default function MenteeDetails(props) {
  const { image, name, discipline, school, level } = props;
  return (
    <div style={{ width: "100%" }}>
      <Image src={image} alt={name} width={150} height={150} />
      <div className={classes.mentText}>
        <div>
          <p style={{ fontWeight: "550", fontSize: "1rem" }}>{name}</p>
          <p style={{ fontSize: "0.85rem", lineHeight: "0.7" }}>{discipline}</p>
          <p style={{ fontSize: "0.85rem", lineHeight: "0.7" }}>{school}</p>
          <p style={{ fontSize: "0.85rem", lineHeight: "0.7" }}>{level}</p>
        </div>
      </div>
    </div>
  );
}
