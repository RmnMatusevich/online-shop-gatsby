import React, { useState } from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import Components from "./Components/Components.jsx"
import Context from "../context/Context"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
let hist = createMemoryHistory()

const Index = () => {
  let pageLang
  if (typeof window !== "undefined") {
    pageLang = window.localStorage.getItem("lang")
  }
  const langWithoutRu = pageLang === "ru" ? "" : pageLang

  const [lang, setLang] = useState(langWithoutRu ? langWithoutRu : "")

  return (
    <Context.Provider
      value={{
        lang,
        setLang,
      }}
    >
      <Helmet>
        <script src={withPrefix("callback.js")} type="text/javascript" />
        <meta name="yandex-verification" content="0d1b788a734b13b9" />
      </Helmet>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default Index
