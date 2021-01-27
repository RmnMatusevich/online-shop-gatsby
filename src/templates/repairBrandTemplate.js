import React, { useState, useEffect } from "react"

import classNames from "classnames"
import { Link, withPrefix } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Footer from "../components/Footer/Footer"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Card, Typography, TextField, Hidden } from "@material-ui/core"
import SEO from "../components/seo"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import { Helmet } from "react-helmet"
import theme from "../theme"
const StyledCard = withStyles({
  root: {
    display: "flex",
    width: 300,
    height: 145,
    padding: 20,
    margin: 6,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    boxShadow: "0 12px 20px -10px gray",
    transition: "0.18s ease",
    "&:hover, &:focus": {
      transform: "scale(1.03)",
      boxShadow: "0 12px 20px -10px gray",
    },
  },
})(Card)

const SearchTextField = withStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      borderColor: "red",
    },
    width: "100%",
  },
}))(TextField)

const RepairBrandTemplate = props => {
  const { classes, data, ...rest } = props
  const repairBrandData = data.allMarkdownRemark.edges
  let pageLang
  if (typeof window !== "undefined") {
    pageLang = window.localStorage.getItem("lang")
  }
  const [lang, setLang] = useState(pageLang)
  const [searchValue, setSearchValue] = useState("")
  const [products, setProducts] = useState(repairBrandData)

  const sortProducts = value => {
    const filteredItems = repairBrandData.filter(i =>
      i.node.frontmatter.productName.toLowerCase().includes(value.toLowerCase())
    )
    setProducts(filteredItems)
  }

  useEffect(() => {
    sortProducts(searchValue)
  }, [searchValue])

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(13,104,224,1) 0%, rgba(13,104,224,1) 45%, rgba(13,104,224,1) 54%, rgba(13,104,224,0.9374124649859944) 65%, rgba(13,104,224,0.7161239495798319) 78%, rgba(13,104,224,0.3799894957983193) 90%, rgba(13,104,224,0) 97%)",
      }}
    >
      <SEO
        title={
          repairBrandData && repairBrandData[0]
            ? repairBrandData[0].node.frontmatter.productBrand
            : "Repair"
        }
        description={
          "Repair phone, Repair tablets, Repair watch, Repair iqos, Repair laptops."
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
      <Parallax image={require("../../static/img/backgroundmain.svg")} small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  {repairBrandData && repairBrandData[0]
                    ? repairBrandData[0].node.frontmatter.productBrand
                    : null}
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 2% 50px 2%",
          justifyContent: "center",
          padding: 12,
        }}
      >
        {/*<form className={classes.root} noValidate autoComplete="off">*/}

        {/*<TextField*/}
        {/*  id="outlined-basic"*/}
        {/*  label="Search"*/}
        {/*  variant="outlined"*/}
        {/*  onChange={event => {*/}
        {/*    setSearchValue(event.target.value)*/}
        {/*  }}*/}
        {/*/>*/}
        <SearchTextField
          value={searchValue}
          label="Search"
          variant="outlined"
          onChange={event => {
            setSearchValue(event.target.value)
          }}
        />
        {/*</form>*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "0 auto",
            width: "fit-content",
            justifyContent: "center",
          }}
        >
          {products.length === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                [theme.breakpoints.down("xs")]: {
                  flexDirection: "column",
                },
              }}
            >
              <Typography style={{ lineHeight: 2, fontSize: 40 }}>
                Sorry, for now we can't find that
              </Typography>
              <img
                src={require("../assets/img/search.svg")}
                alt="search"
                style={{ width: "45%", height: 200 }}
              />
            </div>
          )}
          {products.map((i, index) => {
            const item = i.node.frontmatter
            return (
              <Link
                to={item.path}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <StyledCard key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={require(`../../static/${item.productImage}`)}
                        alt="Product image"
                        style={{ height: 100, margin: "0 10px 0 0" }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body1">
                          {item.productBrand}
                        </Typography>
                        <Typography variant="h6">{item.productName}</Typography>
                      </div>
                    </div>
                  </div>
                </StyledCard>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(RepairBrandTemplate)

export const pageQuery = graphql`
  query RepairBrand($path: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: $path } } }
      sort: { fields: frontmatter___productYear, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            productBrand
            productName
            productDescription
            productImage
            productYear
          }
        }
      }
    }
  }
`
