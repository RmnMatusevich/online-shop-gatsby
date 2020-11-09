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

const RepairPageTemplate = props => {
  const { classes, data, ...rest } = props
  const repairData = data.allMarkdownRemark.edges
  console.log("datadatadata ", repairData)
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
        {repairData.map((i, index) => {
          return (
            <div key={index}>
              <h1>{i.node.frontmatter.title}</h1>
              <h1>{i.node.frontmatter.subtitle}</h1>
              <h1>{i.node.frontmatter.title}</h1>
              <img
                src={require(`../../static/${i.node.frontmatter.backgroundImage}`)}
                alt="dfgfg"
              />
              {i.node.frontmatter.brands.map((i, index) => {
                return (
                  <div key={index}>
                    <Link to={i.linkTo}>
                      <img
                        src={require(`../../static/${i.image}`)}
                        alt="fddf"
                      />
                    </Link>
                    <h4>{i.brand}</h4>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(RepairPageTemplate)

export const pageQuery = graphql`
  query RepairPages($path: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { repair: { eq: "/repair" }, path: { eq: $path } }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            subtitle
            backgroundImage
            brands {
              brand
              image
              linkTo
            }
          }
        }
      }
    }
  }
`
