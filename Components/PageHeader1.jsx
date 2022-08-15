import useMediaQuery from "@mui/material/useMediaQuery";

export default function PageHeader1(props) {
  const mobileView = useMediaQuery("(max-width:1000px)");
  const { image, text } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={
          mobileView
            ? {
                padding: "2rem",
                textAlign: "center",
                color: "white",
              }
            : {
                padding: "5rem 4rem",
                textAlign: "center",
                color: "white",
              }
        }
      >
        <h1 style={{ fontSize: "2rem" }}>{text}</h1>
      </div>
    </div>
  );
}
