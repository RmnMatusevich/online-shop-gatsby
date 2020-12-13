import React, { useState } from "react"
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
import { StaticQuery, graphql, withPrefix } from "gatsby"
import SectionRepair from "../../components/SectionRepair"
import SectionText from "../../components/SectionText"
import SectionContacts from "../../components/SectionContacts"
import { navigation } from "../../locales/navigation"
import SectionAdvantages from "../../components/SectionAdvantages"
import SectionPills from "./Sections/SectionPills"

const Components = props => {
  let pageLang
  if (typeof window !== "undefined") {
    pageLang = window.localStorage.getItem("lang")
  }
  const [lang, setLang] = useState(pageLang)
  const { classes, ...rest } = props
  const data = navigation(lang ? lang : "ru")

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(13,104,224,1) 0%, rgba(13,104,224,1) 45%, rgba(13,104,224,1) 54%, rgba(13,104,224,0.9374124649859944) 65%, rgba(13,104,224,0.7161239495798319) 78%, rgba(13,104,224,0.3799894957983193) 90%, rgba(13,104,224,0) 97%)",
      }}
    >
      <Helmet>
        <script src={withPrefix('callback.js')} type="text/javascript" />
        <meta name="yandex-verification" content="0d1b788a734b13b9" />
      </Helmet>
      <SEO
        title="Home"
        description={
          "Repair phone, Repair tablets, Repair watch, Repair iqos, Repair laptops."
        }
      />
      <Header
        rightLinks={<HeaderLinks setLang={setLang} lang={lang} />}
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
                <h3 className={classes.subtitle}>{data.main.subtitle}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ padding: 15 }}
      >
        <SectionRepair lang={lang} />
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
                      aboutUsTitleen
                      aboutUsTitlepl
                      aboutUsDescriptionpl
                      aboutUsDescriptionen
                      openingDescriptionen
                      openingDescriptionpl
                      openingTitleen
                      openingTitlepl
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
                    `aboutUsTitle${lang ? `${lang}` : ""}`
                  ]
                }
                text={
                  data.allMarkdownRemark.edges[0].node.frontmatter[
                    `aboutUsDescription${lang ? `${lang}` : ""}`
                  ]
                }
              />
            </>
          )}
        />
      </div>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 10, padding: 15 }}
      >
        <SectionAdvantages lang={lang} />
      </div>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 10, padding: 15 }}
      >
        <SectionPills lang={lang} />
      </div>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ marginTop: 10, padding: 15 }}
      >
        <SectionContacts lang={lang} />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(Components)
