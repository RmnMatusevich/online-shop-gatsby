import classNames from "classnames"
import { Link } from "gatsby"
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
    margin: 12,
    maxWidth: 300,
    height: 'fit-content',
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    boxShadow: "0 12px 20px -10px gray",
  },
})(Card)

const BuyPageTemplate = props => {
  const { classes, data, ...rest } = props
  const repairData = data.allMarkdownRemark.edges
  console.log(repairData)
  return (
    <div>
      <SEO
        title="Repair"
        description={
          repairData && repairData[0]
            ? `${repairData[0].node.frontmatter.title} ${repairData[0].node.frontmatter.subtitle}`
            : "Repair phone, Repair tablets, Repair watch, Repair iqos, Repair laptops."
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
        {repairData.map((i, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  margin: "0 auto",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {repairData[0].node.frontmatter.products.map((i, index) => {
                  return (
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      key={index}
                    >
                        <StyledCard key={index}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginBottom: 10,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                              }}
                            >
                              <img
                                src={require(`../../static/${i.productImage}`)}
                                style={{ height: 100, width: 100, borderRadius: 20, marginRight: 10 }}
                              />
                              <div style={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="body2">
                                  {i.productBrand}
                                </Typography>
                                <Typography variant="h6">
                                  {i.productName}
                                  <Typography variant="body2">
                                    {i.productYear}
                                  </Typography>
                                </Typography>
                              </div>
                            </div>
                          </div>
                          <div style={{marginBottom: 10}}>
                            <Typography variant='body2'>{i.productDescription}</Typography>
                          </div>
                        </StyledCard>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(BuyPageTemplate)

export const pageQuery = graphql`
  query BuyPages($path: String!) {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: $path}}}) {
    edges {
      node {
        frontmatter {
          path
          title
          subtitle
          backgroundImage
          products {
            productBrand
            productDescription
            productImage
            productName
            productYear
        }
      }
    }
  }
  }
  }
`
