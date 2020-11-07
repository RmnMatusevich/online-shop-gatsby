/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import SettingsInputHdmiOutlinedIcon from '@material-ui/icons/SettingsInputHdmiOutlined';
import MemoryIcon from '@material-ui/icons/Memory';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Ремонт устройств"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={BuildOutlinedIcon}
          dropdownList={[
            <Link href="/repair/phone">
              <a className={classes.dropdownLink}>Ремонт телефонов</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ремонт планшетов</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ремонт ноутбуков</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ремонт часов</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ремонт iqos</a>
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
          buttonText="Скупка устройств"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={MonetizationOnOutlinedIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Продать телефон</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Продать планшет</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Продать ноутбук</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Продать часы</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Продажа устройств"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={DevicesOtherIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Телефоны</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Планшеты</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Ноутбуки</a>
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
            color: "transparent"
          }}
          buttonIcon={SettingsInputHdmiOutlinedIcon}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Кабеля и зарядки</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Чехлы</a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>Стилусы</a>
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
          <MemoryIcon className={classes.icons} />Запчасти
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <InfoOutlinedIcon className={classes.icons} />Информация
        </Button>
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
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
