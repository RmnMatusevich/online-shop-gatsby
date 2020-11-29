import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import Parallax from "../components/Parallax/Parallax"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Typography } from "@material-ui/core"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const SellPageTemplate = props => {
  const { classes, data, ...rest } = props
  const repairData = data.allMarkdownRemark.edges
  console.log(repairData)
  return (
    <div>
      <SEO
        title={
          repairData && repairData[0]
            ? repairData[0].node.frontmatter.title
            : "Sell"
        }
        description={
          repairData && repairData[0]
            ? `${repairData[0].node.frontmatter.title} ${repairData[0].node.frontmatter.subtitle}`
            : "Sell phone, Sell tablets, Sell watch, Sell iqos, Sell laptops."
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
      <Parallax
        image={require(`../../static/${repairData[0].node.frontmatter.backgroundImage}`)}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  {repairData[0].node.frontmatter.title}
                </h1>
                <h3 className={classes.subtitle}>
                  {repairData[0].node.frontmatter.subtitle}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ padding: 25 }}
      >
        <Typography variant="h3">
          {repairData[0].node.frontmatter.sellTitle}
        </Typography>
        <ReactMarkdown>
        {repairData[0].node.frontmatter.sellText}
        </ReactMarkdown>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(SellPageTemplate)

export const pageQuery = graphql`
  query SellPages($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          frontmatter {
            path
            title
            subtitle
            backgroundImage
            sellTitle
            sellText
          }
        }
      }
    }
  }
`
