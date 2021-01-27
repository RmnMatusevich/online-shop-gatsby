import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
// @material-ui/icons
import Menu from "@material-ui/icons/Menu"
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx"
import { Typography } from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import ScheduleIcon from "@material-ui/icons/Schedule"
import { navigation } from "../../locales/navigation"
import { ContactItem } from "../SectionContacts"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.headerColorChange = this.headerColorChange.bind(this)
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange)
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = typeof window !== "undefined" && window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", this.headerColorChange)
    }
  }
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      fixed,
      absolute,
      lang,
    } = this.props
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    })
    const brandComponent = (
      <Button className={classes.title} href="/">
        <img
          src={require("../../../static/img/logo.png")}
          style={{ width: 150 }}
          alt="Logo"
        />
      </Button>
    )
    const data = navigation(lang ? lang : "ru")

    const infoComponent = (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ContactItem
          smText
          leftIcon={
            <PhoneIcon
              fontSize="default"
              style={{ color: "#0D68E0", marginRight: 10 }}
            />
          }
          rightText={
            <a href="tel:+48889559888" style={{ color: "rgba(0, 0, 0, 0.87)" }}>
              +48 889 559 888
            </a>
          }
        />
        <ContactItem
          smText
          leftIcon={
            <ScheduleIcon
              fontSize="default"
              style={{ color: "#0D68E0", marginRight: 10 }}
            />
          }
          rightText={
            <a style={{ color: "rgba(0, 0, 0, 0.87)" }}>{data.contacts.time}</a>
          }
        />
      </div>
    )

    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {/*{leftLinks !== undefined ? brandComponent : null}*/}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {brandComponent}
                <Hidden smDown implementation="css">
                  {infoComponent}
                </Hidden>
              </div>
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.defaultProp = {
  color: "white",
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
}

export default withStyles(headerStyle)(Header)
