/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ButtonGreen from "../ButtonGreen";
import useMediaQuery from "@mui/material/useMediaQuery";
export default class NextJsCarousel extends Component {
  render() {
    return (
      <Carousel
        autoFocus={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        stopOnHover={false}
      >
        <div>
          <img src="/images/homepage/carousel/1.png" alt="image1" />
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "2.5rem",
                fontWeight: "900",
                marginBottom: "20rem",
                padding: "0 35rem 0 0",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              Welcome to <span style={{ color: "#1AD84F" }}>HIMSTITUTE</span>
            </h1>
            <p
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "0.9rem",
                padding: "0 36rem 0 0",
                marginBottom: "15rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              Our primary aim is to enhance the mobility of Health Information
              Management, Health Informatics, Digital Health and other Allied
              Health Students and graduates to have access and opportunities to
              study abroad, mentorship and research
            </p>
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0 36rem 0 0",
                marginBottom: "10rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              <ButtonGreen link="/">Learn More</ButtonGreen>
            </div>
          </div>
        </div>

        <div>
          <img src="/images/homepage/carousel/2.png" alt="image2" />
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "2.5rem",
                fontWeight: "900",
                marginBottom: "20rem",
                padding: "0 35rem 0 0",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              EXPLORE OPPORTUNITIES TO{" "}
              <span style={{ color: "#1AD84F" }}>STUDY ABROAD</span>
            </h1>
            <p
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "0.9rem",
                padding: "0 36rem 0 0",
                marginBottom: "15rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              We provide carefully curated information to suit your study
              ambitions, you are guaranteed of success.
            </p>
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0 36rem 0 0",
                marginBottom: "10rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              <ButtonGreen link="/">Explore Now</ButtonGreen>
            </div>
          </div>
        </div>

        <div>
          <img src="/images/homepage/carousel/3.png" alt="image3" />
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "2.5rem",
                fontWeight: "900",
                marginBottom: "20rem",
                padding: "0 35rem 0 0",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              GET MENTORED BY{" "}
              <span style={{ color: "#1AD84F" }}>PROVEN PROFESSIONALS</span>
            </h1>
            <p
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "0.9rem",
                padding: "0 36rem 0 0",
                marginBottom: "15rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              We provide access to adequate mentorship through our pool of
              seasoned professionals in your desired field.
            </p>
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0 36rem 0 0",
                marginBottom: "10rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              <ButtonGreen link="/">Explore Now</ButtonGreen>
            </div>
          </div>
        </div>

        <div>
          <img src="/images/homepage/carousel/4.png" alt="image4" />
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "2.5rem",
                fontWeight: "900",
                marginBottom: "20rem",
                padding: "0 35rem 0 0",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              GET YOUR ARTICLES{" "}
              <span style={{ color: "#1AD84F" }}>PUBLISHED</span>
            </h1>
            <p
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "0.9rem",
                padding: "0 36rem 0 0",
                marginBottom: "15rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              Become a published author by submitting your written articles on
              our platform.
            </p>
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0 36rem 0 0",
                marginBottom: "10rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              <ButtonGreen link="/">Explore Now</ButtonGreen>
            </div>
          </div>
        </div>

        <div>
          <img src="/images/homepage/carousel/5.png" alt="image5" />
          <div>
            <h1
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "2.5rem",
                fontWeight: "900",
                marginBottom: "20rem",
                padding: "0 35rem 0 0",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              YOUR DREAMS ARE{" "}
              <span style={{ color: "#1AD84F" }}>ACHIEVABLE</span> WITH US
            </h1>
            <p
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "0.9rem",
                padding: "0 36rem 0 0",
                marginBottom: "15rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              We provide carefully curated information to suit your study
              ambitions, you are guaranteed of success.
            </p>
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0 36rem 0 0",
                marginBottom: "10rem",
                textAlign: "left",
                opacity: "1",
              }}
              className="legend"
            >
              <ButtonGreen link="/">Apply Online</ButtonGreen>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
