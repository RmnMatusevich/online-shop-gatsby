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

const RepairBrandTemplate = props => {
  const { classes, data, ...rest } = props
  const repairBrandData = data.allMarkdownRemark.edges
  console.log(data)
  // console.log("datadatadata ", repairData)
  // const { frontmatter } = allMarkdownRemark;
  // console.log(frontmatter.title)
  // console.log(frontmatter.data)

  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {repairBrandData.map((i, index) => {
          return (
            <div key={index}>
              <Link to={i.node.frontmatter.path}>
                <img
                  src={require(`../../static/${i.node.frontmatter.productImage}`)}
                />
              </Link>
              {i.node.frontmatter.productBrand}
              {i.node.frontmatter.productDescription}
            </div>
          )
        })}
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
