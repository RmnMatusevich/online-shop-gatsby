import React, { useState, useEffect } from "react"

import classNames from "classnames"
import { Link } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Footer from "../components/Footer/Footer"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import { Card, Typography, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"

const StyledCard = withStyles({
  root: {
    display: "flex",
    width: 335,
    height: 145,
    padding: 20,
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
    width: "80%",
  },
}))(TextField)

const RepairBrandTemplate = props => {
  const { classes, data, ...rest } = props
  const repairBrandData = data.allMarkdownRemark.edges
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
    <div>
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
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "110px auto 50px auto",
          width: "fit-content",
          justifyContent: "center",
          padding: 20,
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
            gap: 10,
            margin: "0 auto",
            width: "fit-content",
            justifyContent: "center",
          }}
        >
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
