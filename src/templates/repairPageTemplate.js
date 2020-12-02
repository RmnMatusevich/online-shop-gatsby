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
    gap: 12,
    width: 260,
    height: 260,
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

const RepairPageTemplate = props => {
  const { classes, data, ...rest } = props
  const repairData = data.allMarkdownRemark.edges

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
                  gap: 10,
                  margin: "0 auto",
                  width: "fit-content",
                  justifyContent: "center",
                }}
              >
                {i.node.frontmatter.brands.map((i, index) => {
                  return (
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      key={index}
                    >
                      <Link to={i.linkTo} key={index} style={{textDecoration: 'none'}}>
                        <StyledCard>
                          <img
                            style={{
                              width: 150,
                              height: 150,
                              borderRadius: 30,
                            }}
                            src={require(`../../static/${i.image}`)}
                          />
                          <Typography
                            variant="h6"
                            style={{ letterSpacing: 1.2 }}
                          >
                            {i.brand}
                          </Typography>
                        </StyledCard>
                      </Link>
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
