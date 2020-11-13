import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionBasics from "./Sections/SectionBasics.jsx"
import SectionNavbars from "./Sections/SectionNavbars.jsx"
import SectionTabs from "./Sections/SectionTabs.jsx"
import SectionPills from "./Sections/SectionPills.jsx"
import SectionNotifications from "./Sections/SectionNotifications.jsx"
import SectionTypography from "./Sections/SectionTypography.jsx"
import SectionJavascript from "./Sections/SectionJavascript.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx"
import SectionLogin from "./Sections/SectionLogin.jsx"
import SectionExamples from "./Sections/SectionExamples.jsx"
import SectionDownload from "./Sections/SectionDownload.jsx"
import { Helmet } from "react-helmet"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

const Components = props => {
  const { classes, data, ...rest } = props
  console.log("datadatadata ", data)

  return (
    <div>
      <Helmet>
        <title>Tech Tag</title>
        <meta
          name="description"
          content="Быстрый и качественный ремонт телефонов, ремонт планшетов, ремонт iqos,ремонт часов, ремонт ноутбуков"
        />
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
