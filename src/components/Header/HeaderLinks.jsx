/*eslint-disable*/
import React, { useContext } from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined"
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined"
import DevicesOtherIcon from "@material-ui/icons/DevicesOther"
import SettingsInputHdmiOutlinedIcon from "@material-ui/icons/SettingsInputHdmiOutlined"
import MemoryIcon from "@material-ui/icons/Memory"
import LanguageIcon from "@material-ui/icons/Language"
import classNames from "classnames"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"
import { Typography } from "@material-ui/core"
import { navigation } from "../../locales/navigation"

function HeaderLinks({ ...props }) {
  const { classes, lang, setLang } = props

  const onLanguageChange = lang => {
    let langWithoutRu
    if (typeof window !== "undefined") {
      langWithoutRu = lang === "ru" ? "" : lang
      window.localStorage.setItem("lang", langWithoutRu ? langWithoutRu : "")
    }
    setLang(langWithoutRu ? langWithoutRu : "")
  }
  const data = navigation(lang ? lang : "ru")
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={data.repair.title}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={BuildOutlinedIcon}
          dropdownList={[
            <Link to="/repair/phone" className={classes.dropdownLink}>
              {data.repair.dropdown.phoneRepair}
            </Link>,
            <Link to="/repair/tablets" className={classes.dropdownLink}>
              {data.repair.dropdown.tabletRepair}
            </Link>,
            <Link to="/repair/laptops" className={classes.dropdownLink}>
              {data.repair.dropdown.laptopRepair}
            </Link>,
            <Link to="/repair/watches" className={classes.dropdownLink}>
              {data.repair.dropdown.watchRepair}
            </Link>,
            <Link to="/repair/iqos" className={classes.dropdownLink}>
              {data.repair.dropdown.iqosRepair}
            </Link>,
            // <a
            //   href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Documentation
            // </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={data.sell.title}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MonetizationOnOutlinedIcon}
          dropdownList={[
            <Link to="/sell/phone" className={classes.dropdownLink}>
              {data.sell.dropdown.phoneSell}
            </Link>,
            <Link to="/sell/tablets" className={classes.dropdownLink}>
              {data.sell.dropdown.tabletSell}
            </Link>,
            <Link to="/sell/laptops" className={classes.dropdownLink}>
              {data.sell.dropdown.laptopSell}
            </Link>,
            <Link to="/sell/watches" className={classes.dropdownLink}>
              {data.sell.dropdown.watchSell}
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={data.buy.title}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={DevicesOtherIcon}
          dropdownList={[
            <Link to="/buy/phone" className={classes.dropdownLink}>
              {data.buy.dropdown.phoneBuy}
            </Link>,
            <Link to="/buy/tablets" className={classes.dropdownLink}>
              {data.buy.dropdown.tabletBuy}
            </Link>,
            <Link to="/buy/laptops" className={classes.dropdownLink}>
              {data.buy.dropdown.laptopBuy}
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={data.accessories.title}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={SettingsInputHdmiOutlinedIcon}
          dropdownList={[
            <Link
              to="/accessories/cable-charges"
              className={classes.dropdownLink}
            >
              {data.accessories.dropdown.cableAndCharging}
            </Link>,
            <Link to="/accessories/cases" className={classes.dropdownLink}>
              {data.accessories.dropdown.cases}
            </Link>,
            <Link to="/accessories/stylus" className={classes.dropdownLink}>
              {data.accessories.dropdown.styluses}
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MemoryIcon className={classes.icons} />
          <Typography variant="body2" style={{ fontSize: 14 }}>
            {data.spares.title}
          </Typography>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <InfoOutlinedIcon className={classes.icons} />
          <Typography variant="body2" style={{ fontSize: 14 }}>
            {data.information.title}
          </Typography>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={data.language.title}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={LanguageIcon}
          dropdownList={[
            // <Link to="/sell/phone" className={classes.dropdownLink}>
            //   Продать телефон
            // </Link>,
            // <Link to="/sell/tablets" className={classes.dropdownLink}>
            //   Продать планшет
            // </Link>,
            // <Link to="/sell/laptops" className={classes.dropdownLink}>
            //   Продать ноутбук
            // </Link>,
            // <Link to="/sell/watches" className={classes.dropdownLink}>
            //   Продать часы
            // </Link>,
            <div
              onClick={() => {
                onLanguageChange("en")
              }}
              className={classNames(
                classes.dropdownLink,
                lang === "en" ? classes.dropdownLinkActive : null
              )}
            >
              En
            </div>,
            <div
              onClick={() => {
                onLanguageChange("pl")
              }}
              className={classNames(
                classes.dropdownLink,
                lang === "pl" ? classes.dropdownLinkActive : null
              )}
            >
              Pl
            </div>,
            <div
              onClick={() => {
                onLanguageChange("ru")
              }}
              className={classNames(
                classes.dropdownLink,
                lang === "" ? classes.dropdownLinkActive : null
              )}
            >
              Ru
            </div>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title={data.instagramTooltip}
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/techtagpl/?igshid=l1jajg9pay3g"
            target="_blank"
            className={classes.navLink}
          >
            {/*<i className={classes.socialIcons + " fab fa-instagram"} />*/}
            <img
              src={require("../../assets/img/instagram.svg")}
              alt="instagram"
            />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
