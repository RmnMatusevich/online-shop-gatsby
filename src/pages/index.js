import React, { useState } from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import Components from "./Components/Components.jsx"
import Context from "../context/Context"
import RepairPhone from "./RepairPhone/RepairPhone"
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
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default Index
