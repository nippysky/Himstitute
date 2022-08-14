import Image from "next/image";

export default function TeamMembers(props) {
  const { image, name, linkedin, position } = props;
  return (
    <div>
      <div>
        <Image src={image} alt={name} width={300} height={300} />
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            float: "left",
            width: "80%",
            textAlign: "left",
          }}
        >
          <h5 style={{ fontSize: "1rem" }}>{name}</h5>
        </div>

        <div style={{ float: "right", width: "20%" }}>
          <a style={{ float: "right" }} href={linkedin}>
            <Image
              src="/images/homepage/LinkedIn.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      <div>
        <small style={{ float: "left", marginTop: "-0.5rem" }}>
          {position}
        </small>
      </div>
    </div>
  );
}
