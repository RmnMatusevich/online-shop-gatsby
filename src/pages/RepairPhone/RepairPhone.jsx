import classNames from "classnames"
import { Link } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import Footer from "../../components/Footer/Footer"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Parallax from "../../components/Parallax/Parallax"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Header from "../../components/Header/Header"

const RepairPhone = props => {
  const { classes, data, ...rest } = props
  console.log("datadatadata ", data)
  // const { frontmatter } = allMarkdownRemark;
  // console.log(frontmatter.title)
  // console.log(frontmatter.data)

  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Link to={"/repair/phone/apple/iphone-xr"}>
          <a>fsdfsdfsdfsdfsdf</a>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(RepairPhone)
