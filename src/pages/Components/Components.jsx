import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import SEO from "../../components/seo"

const Components = props => {
  const { classes, data, ...rest } = props
  console.log("datadatadata ", data)

  return (
    <div>
      <SEO
        title="Home"
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
      <Parallax image={require("../../../static/img/backgroundmain.svg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Tech Tag</h1>
                <h3 className={classes.subtitle}>Look into the future</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(Components)

// export const pageQuery = graphql`
// query BlogPostByPath {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         date
//         path
//         title
//       }
//     }
//   }
// }
// `;
