import Image from "next/image";
import ButtonWhite from "../ButtonWhite";

export default function SummaryDetails(props) {
  const { image, title, details, link } = props;
  return (
    <div>
      <div>
        <Image src={image} alt={title} priority height={100} width={100} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{details}</p>
      </div>
      <div>
        <ButtonWhite link={link}>Explore Now</ButtonWhite>
      </div>
    </div>
  );
}
