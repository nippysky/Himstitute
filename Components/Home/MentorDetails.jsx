import Image from "next/image";
import classes from "../Styles/Mentors.module.css";

export default function MentorDetails(props) {
  const { image, name, affiliation, discipline, linkedin } = props;
  return (
    <div>
      <Image src={image} alt={name} width={150} height={150} />
      <div>
        <div>
          <span style={{ fontWeight: "550" }}>{name}</span>
          <span style={{ position: "relative", left: "0.5rem", top: "0.2rem" }}>
            <a href={linkedin}>
              <Image
                src="/images/homepage/LinkedIn.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </span>
        </div>

        <div>
          <small>{affiliation}</small>
        </div>
        <div>
          <small>{discipline}</small>
        </div>
      </div>
    </div>
  );
}
