import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Card, Typography } from "@material-ui/core"
import { Link } from "gatsby"

const StyledCard = withStyles({
  root: {
    display: "flex",
    gap: 12,
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

const repairObj = [
  {
    img: "repair-screen.svg",
    text: "Ремонт телефонов",
    linkTo: "/repair/phone",
  },
  {
    img: "laptop-screen.svg",
    text: "Ремонт планшетов",
    linkTo: "/repair/tablets",
  },
  {
    img: "tablet-screen.svg",
    text: "Ремонт ноутбуков",
    linkTo: "/repair/laptops",
  },
]

const SectionRepair = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant="h3"
        style={{ marginBottom: 20, textAlign: "center" }}
      >
        Ремонт
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          margin: "0 auto",
          width: "fit-content",
          justifyContent: "center",
        }}
      >
        {repairObj.map((i, index) => {
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
