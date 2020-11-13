import React from "react";
import { Helmet } from "react-helmet"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import withStyles from "@material-ui/core/styles/withStyles"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

const Index = (props) => {
  const { classes, data, ...rest } = props

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
      <Parallax image={require("../../static/img/backgroundmain.svg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2 className={classes.title}>Sorry, but this page is not existing</h2>
                <h3 className={classes.subtitle}>404 Not Found</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  )
}

export default withStyles(componentsStyle)(Index);
