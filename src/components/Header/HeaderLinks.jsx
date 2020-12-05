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

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons"

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"
import { Typography } from "@material-ui/core"
import Context from "../../context/Context"

function HeaderLinks({ ...props }) {
  const { classes } = props
  const { lang, setLang } = useContext(Context)

  const onLanguageChange = lang => {
    let langWithoutRu
    if (typeof window !== "undefined") {
      langWithoutRu = lang === "ru" ? "" : lang
      window.localStorage.setItem("lang", langWithoutRu ? langWithoutRu : "")
    }
    setLang(langWithoutRu ? langWithoutRu : "")
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Ремонт"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={BuildOutlinedIcon}
          dropdownList={[
            <Link to="/repair/phone" className={classes.dropdownLink}>
              Ремонт телефонов
            </Link>,
            <Link to="/repair/tablets" className={classes.dropdownLink}>
              Ремонт планшетов
            </Link>,
            <Link to="/repair/laptops" className={classes.dropdownLink}>
              Ремонт ноутбуков
            </Link>,
            <Link to="/repair/watches" className={classes.dropdownLink}>
              Ремонт часов
            </Link>,
            <Link to="/repair/iqos" className={classes.dropdownLink}>
              Ремонт iqos
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
          buttonText="Скупка"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={MonetizationOnOutlinedIcon}
          dropdownList={[
            <Link to="/sell/phone" className={classes.dropdownLink}>
              Продать телефон
            </Link>,
            <Link to="/sell/tablets" className={classes.dropdownLink}>
              Продать планшет
            </Link>,
            <Link to="/sell/laptops" className={classes.dropdownLink}>
              Продать ноутбук
            </Link>,
            <Link to="/sell/watches" className={classes.dropdownLink}>
              Продать часы
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Продажа"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={DevicesOtherIcon}
          dropdownList={[
            <Link to="/buy/phone" className={classes.dropdownLink}>
              Купить телефон
            </Link>,
            <Link to="/buy/tablets" className={classes.dropdownLink}>
              Купить планшет
            </Link>,
            <Link to="/buy/laptops" className={classes.dropdownLink}>
              Купить ноутбук
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Аксессуары"
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
              Кабеля и зарядки
            </Link>,
            <Link to="/accessories/cases" className={classes.dropdownLink}>
              Чехлы
            </Link>,
            <Link to="/accessories/stylus" className={classes.dropdownLink}>
              Стилусы
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
            Запчасти
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
            Информация
          </Typography>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Язык"
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
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/techtagpl/?igshid=l1jajg9pay3g"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
