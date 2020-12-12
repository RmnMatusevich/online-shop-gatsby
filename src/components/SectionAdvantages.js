import React from "react"
import { makeStyles } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import { navigation } from "../locales/navigation"
import { graphql, StaticQuery } from "gatsby"
import SectionText from "./SectionText"

const theme = createMuiTheme()

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "98vw",
    margin: '0 auto',
    marginBottom: 15,
  },

  advantageText: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  advantageImage: {
    width: '28%',
    maxWidth: 350,
  },
}))

const SectionAdvantages = ({ lang }) => {
  const classes = useStyles()
  const data = navigation(lang ? lang : "ru")

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={require("../assets/img/devicesLaptop.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
        <img
          src={require("../assets/img/deviceWatch.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
        <img
          src={require("../assets/img/mobileDevices.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
      </div>
      <StaticQuery
        query={graphql`
          query OpeningData {
            allMarkdownRemark(filter: { frontmatter: { path: { eq: "/" } } }) {
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
                  `openingTitle${lang ? `${lang}` : ""}`
                ]
              }
              text={
                data.allMarkdownRemark.edges[0].node.frontmatter[
                  `openingDescription${lang ? `${lang}` : ""}`
                ]
              }
            />
          </>
        )}
      />
      <div className={classes.imageContainer}>
        <img
          src={require("../assets/img/bugFixing.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
        <img
          src={require("../assets/img/developApp.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
        <img
          src={require("../assets/img/webDevices.svg")}
          className={classes.advantageImage}
          alt="advantage"
        />
      </div>
    </div>
  )
}

export default SectionAdvantages
