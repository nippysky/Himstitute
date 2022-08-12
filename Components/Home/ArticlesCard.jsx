import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import ButtonTrans from "../ButtonTrans";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Typography from "@mui/material/Typography";

export default function ArticlesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image="/images/homepage/Himstitute_Doctor.png"
        alt="green iguana"
      />

      <div style={{ textAlign: "center", marginTop: "-3.5rem" }}>
        <Image
          src="/images/homepage/PP.svg"
          alt="aurthor"
          width={100}
          height={100}
        />
      </div>

      <div style={{ marginTop: "-2rem" }}></div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign="left"
          fontFamily="'Montserrat', sans-serif"
          fontSize="16px"
          fontWeight="bold"
        >
          Lorem and Ipsum in medicine
        </Typography>
        <div
          style={{
            color: "#1AD84F",
            fontSize: "15px",
            textAlign: "left",
            margin: "-0.2rem 0 1rem 0 ",
          }}
        >
          <small>Tom Hanks</small>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          fontFamily="'Montserrat', sans-serif"
          fontSize="14px"
          fontWeight="450"
          textAlign="left"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <div style={{ width: "100", display: "flex", padding: "1rem" }}>
        <div style={{ width: "70%" }}>
          <ButtonTrans link="/">
            <span>Read Full Article</span>
            <span style={{ position: "relative", top: "6px", left: "5px" }}>
              <HiArrowNarrowRight size={20} />
            </span>
          </ButtonTrans>
        </div>
        <div style={{ width: "30%" }}>
          <div style={{ float: "right" }}>
            <ButtonTrans link="/">
              <MdOutlineBookmarkAdd size={25} color="#333333" />
            </ButtonTrans>
          </div>
        </div>
      </div>
    </Card>
  );
}
