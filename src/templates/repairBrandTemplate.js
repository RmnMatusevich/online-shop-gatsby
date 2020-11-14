import classNames from "classnames"
import { Link } from "gatsby"
import SectionCarousel from "../pages/Components/Sections/SectionCarousel"
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import Parallax from "../components/Parallax/Parallax"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Card, Typography } from "@material-ui/core"
import SEO from "../components/seo"

const StyledCard = withStyles({
  root: {
    display: "flex",
    gap: 12,
    width: 350,
    height: 145,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    boxShadow: "0 12px 20px -10px gray",
    transition: "0.18s ease",
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow: "0 12px 20px -10px gray",
    },
  },
})(Card)

const RepairBrandTemplate = props => {
  const { classes, data, ...rest } = props
  const repairBrandData = data.allMarkdownRemark.edges

  return (
    <div>
      <SEO
        title='Repair phone'
        description={
          "Repair phone, Repair tablets, Repair watch, Repair iqos, Repair laptops."
        }
      />
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          margin: "150px auto 50px auto",
          width: "fit-content",
          justifyContent: "center",
        }}
      >
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
        {repairBrandData.map((i, index) => {
          return (
            <Link to={i.node.frontmatter.path} key={index}>
              <StyledCard key={index}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <img
                      src={require(`../../static/${i.node.frontmatter.productImage}`)}
                      style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body2">
                        {i.node.frontmatter.productBrand}
                      </Typography>
                      <Typography variant="h6">
                        {i.node.frontmatter.productName}
                      </Typography>
                    </div>
                  </div>
                </div>
              </StyledCard>
            </Link>
          )
        })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(RepairBrandTemplate)

export const pageQuery = graphql`
  query RepairBrand($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { path: { regex: $path } } }) {
      edges {
        node {
          frontmatter {
            path
            productBrand
            productName
            productDescription
            productImage
            productYear
          }
        }
      }
    }
  }
`
