import React, { useContext } from "react"
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
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SectionRepair from "../../components/SectionRepair"
import SectionText from "../../components/SectionText"
import SectionContacts from "../../components/SectionContacts"
import Context from "../../context/Context"

const Components = props => {
  const { lang, setLang } = useContext(Context)

  const { classes, ...rest } = props

  return (
    <div>
      <Helmet>
        <meta name="yandex-verification" content="0d1b788a734b13b9" />
      </Helmet>
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
        <SectionRepair />
        <SectionCarousel />
        <StaticQuery
          query={graphql`
            query MainPage {
              allMarkdownRemark(
                filter: { frontmatter: { path: { eq: "/" } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      aboutUsTitle
                      aboutUsDescription
                      openingTitle
                      openingDescription
                      aboutUsTitle_en
                      aboutUsTitle_pl
                      aboutUsDescription_pl
                      aboutUsDescription_en
                      openingDescription_en
                      openingDescription_pl
                      openingTitle_en
                      openingTitle_pl
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              <SectionText
                title={
                  data.allMarkdownRemark.edges[0].node.frontmatter[
                    `aboutUsTitle${lang ? `_${lang}` : ""}`
                  ]
                }
                text={
                  data.allMarkdownRemark.edges[0].node.frontmatter[
                    `aboutUsDescription${lang ? `_${lang}` : ""}`
                  ]
                }
              />
              <SectionText
                title={
                  data.allMarkdownRemark.edges[0].node.frontmatter[
                    `openingTitle${lang ? `_${lang}` : ""}`
                  ]
                }
                text={
                  data.allMarkdownRemark.edges[0].node.frontmatter[
                    `openingDescription${lang ? `_${lang}` : ""}`
                  ]
                }
              />
            </>
          )}
        />
      </div>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 10 }}
      >
        <SectionContacts />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(Components)
