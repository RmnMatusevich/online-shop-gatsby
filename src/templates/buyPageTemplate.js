import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import React, { useState } from "react"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import Parallax from "../components/Parallax/Parallax"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Card, Typography } from "@material-ui/core"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

const StyledCard = withStyles(theme => ({
  root: {
    display: "flex",
    margin: 12,
    width: 320,
    height: 200,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    boxShadow: "0 12px 20px -10px gray",
  },
}))(Card)

const BuyPageTemplate = props => {
  const { classes, data, ...rest } = props
  let pageLang
  if (typeof window !== "undefined") {
    pageLang = window.localStorage.getItem("lang")
  }
  const [lang, setLang] = useState(pageLang)
  const repairData = data.allMarkdownRemark.edges
  console.log(repairData)
  return (
    <div>
      <SEO
        title={
          repairData && repairData[0]
            ? repairData[0].node.frontmatter.title
            : "Buy"
        }
        description={
          repairData && repairData[0]
            ? `${repairData[0].node.frontmatter.title} ${repairData[0].node.frontmatter.subtitle}`
            : "Buy phone, Buy tablets, Buy watch, Buy iqos, Buy laptops."
        }
      />
      <Helmet>
        <script src={withPrefix("callback.js")} type="text/javascript" />
        <meta name="yandex-verification" content="0d1b788a734b13b9" />
      </Helmet>
      <Header
        rightLinks={<HeaderLinks lang={lang} setLang={setLang} />}
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

      <div className={classNames(classes.main, classes.mainRaised)}>
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
                  justifyContent: "flex-start",
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
                              alt="Product image"
                              style={{
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                marginRight: 10,
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography variant="body2">
                                {i.productBrand}
                              </Typography>
                              <Typography variant="h6">
                                {i.productName}
                              </Typography>
                              <Typography variant="body2">
                                {i.productCost}
                              </Typography>
                              <Typography variant="body2">
                                {i.productYear}
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <ReactMarkdown>{i.productDescription}</ReactMarkdown>
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
    allMarkdownRemark(filter: { frontmatter: { path: { eq: $path } } }) {
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
              productCost
            }
          }
        }
      }
    }
  }
`
