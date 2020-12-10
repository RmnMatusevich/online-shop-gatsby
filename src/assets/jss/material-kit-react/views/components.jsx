import { container } from "assets/jss/material-kit-react.jsx"

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "3.9rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    lineHeight: 0.9,
    borderRadius: 20,
    backgroundColor: "#0D68E0",
  },
  subtitle: {
    fontSize: "1.313rem",
    width: "fit-content",
    maxWidth: "500px",
    margin: "10px 0 0",
    borderRadius: 6,
    backgroundColor: "#0D68E0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "0 2% 0 2%",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
}

export default componentsStyle
