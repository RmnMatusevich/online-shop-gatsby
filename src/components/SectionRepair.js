import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Card, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { navigation } from "../locales/navigation"

const StyledCard = withStyles({
  root: {
    display: "flex",
    margin: 6,
    width: 240,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0 12px 20px -10px gray",
    transition: "0.18s ease",
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow: "0 12px 20px -10px gray",
    },
  },
})(Card)

const repairObj = data => {
  return [
    {
      img: "repair-screen.svg",
      text: data.repair.dropdown.phoneRepair,
      linkTo: "/repair/phone",
    },
    {
      img: "tablet-screen.svg",
      text: data.repair.dropdown.tabletRepair,
      linkTo: "/repair/tablets",
    },
    {
      img: "laptop-screen.svg",
      text: data.repair.dropdown.laptopRepair,
      linkTo: "/repair/laptops",
    },
  ]
}
const SectionRepair = ({ lang }) => {
  const data = navigation(lang ? lang : "ru")
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant="h3"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        {data.repair.title}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 auto",
          width: "fit-content",
          justifyContent: "center",
        }}
      >
        {repairObj(data).map((i, index) => {
          return (
            <Link to={i.linkTo} key={index}>
              <StyledCard>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  key={index}
                >
                  <img
                    style={{
                      height: 120,
                      borderRadius: 30,
                    }}
                    src={require(`../../static/img/${i.img}`)}
                    alt="Repair"
                  />
                  <Typography
                    variant="h6"
                    style={{ letterSpacing: 1.2, textTransform: "none" }}
                  >
                    {i.text}
                  </Typography>
                </div>
              </StyledCard>
            </Link>
          )
        })}
      </div>
    </div>
  )

  // <Link to={i.linkTo} key={index}>
  //   <StyledCard>
  //     <div
  //       style={{ display: "flex", flexDirection: "column" }}
  //       key={index}
  //     >
  //       <img
  //         style={{
  //           height: 150,
  //           borderRadius: 30,
  //         }}
  //         src={require(i.img)}
  //         alt="Repair"/>
  //       <Typography
  //         variant="h6"
  //         style={{ letterSpacing: 1.2, textTransform: 'none' }}
  //       >
  //         {i.text}
  //       </Typography>
  //     </div>
  //   </StyledCard>
  // </Link>
}

export default SectionRepair
