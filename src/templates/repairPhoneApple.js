import React from "react"
import classNames from "classnames"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import withStyles from "@material-ui/core/styles/withStyles"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Typography } from "@material-ui/core"

const Template = ({ data, classes, ...rest }) => {
  const phonesData = data.allMarkdownRemark.edges
  console.log("phonesData: ", phonesData)
  // const { frontmatter, html } = markdownRemark;
  return (
    <div>
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
        style={{ marginTop: 150 }}
      >
        {phonesData.map((i, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                padding: 20,
              }}
              key={index}
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
                  <Typography variant="body2">
                    {i.node.frontmatter.productYear}
                  </Typography>
                </div>
              </div>
              <Typography variant="body1">
                {i.node.frontmatter.productDescription}
              </Typography>
            </div>
            // <div key={index}>
            //   <img
            //     src={require(`../../static/${i.node.frontmatter.productImage}`)}
            //     alt="gogo"
            //   />
            //   <h1>{i.node.frontmatter.productName}</h1>
            //   <p>{i.node.frontmatter.productDescription}</p>
            //   <h1>{i.node.frontmatter.productBrand}</h1>
            //   <h1>{i.node.frontmatter.productYear}</h1>
            // </div>
          )
        })}
      </div>
    </div>
  )
}
export default withStyles(componentsStyle)(Template)

export const pageQuery = graphql`
  query Repair($path: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "product" }, path: { eq: $path } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            productImage
            productYear
            productDescription
            productName
          }
        }
      }
    }
  }
`
