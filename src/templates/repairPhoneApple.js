import React from "react"
import classNames from "classnames"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import withStyles from "@material-ui/core/styles/withStyles"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Typography } from "@material-ui/core"
import Footer from "../components/Footer/Footer"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const Template = ({ data, classes, ...rest }) => {
  const phonesData = data.allMarkdownRemark.edges
  return (
    <div>
      <SEO
        title={
          phonesData && phonesData[0]
            ? phonesData[0].node.frontmatter.productName
            : "Repair phone"
        }
        description={
          phonesData && phonesData[0]
            ? `${phonesData[0].node.frontmatter.productName}, ${phonesData[0].node.frontmatter.productBrand}, ${phonesData[0].node.frontmatter.productYear}, ${phonesData[0].node.frontmatter.productDescription}`
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
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 110, padding: 20 }}
      >
        {phonesData.map((i, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              key={index}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10
                }}
              >
                <img
                  src={require(`../../static/${i.node.frontmatter.productImage}`)}
                  alt="product"
                  style={{
                    height: 100,
                    margin: "0 10px 0 0",
                  }}
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
              <ReactMarkdown>
                {i.node.frontmatter.productDescription}
              </ReactMarkdown>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-starts",
                }}
              >
                {i.node.frontmatter.services &&
                  i.node.frontmatter.services.map((service, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: '5px 5px 5px 0',
                          borderRadius: 5,
                          maxWidth: 300,
                          margin: "0 10px 10px 0",
                          boxShadow: "0 12px 20px -10px gray",
                        }}
                        key={index}
                      >
                        <img
                          src={require(`../../static/${service.serviceIcon}`)}
                          alt="service-icon"
                          style={{
                            marginRight: 10,
                            height: "100%",
                          }}
                        />
                        <div style={{marginRight: 10, width: 177}}>
                        <Typography variant="body2">{service.serviceTitle}</Typography>
                        </div>
                        <Typography variant="body2">
                          {service.serviceCost}
                        </Typography>
                      </div>
                    )
                  })}
              </div>
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
      <Footer />
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
            services {
              serviceIcon
              serviceTitle
              serviceCost
            }
            productBrand
          }
        }
      }
    }
  }
`
