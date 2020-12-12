import React from "react"
import Typography from "@material-ui/core/Typography"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import ScheduleIcon from "@material-ui/icons/Schedule"
import { MapContainer, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import { navigation } from "../locales/navigation"
import { createMuiTheme } from "@material-ui/core"
import makeStyles from "@material-ui/styles/makeStyles"

const theme = createMuiTheme()

const useStyles = makeStyles(() => ({
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "6px 0",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
}))
const position = [52.2533308, 20.9910625]

const SectionContacts = ({ lang }) => {
  const data = navigation(lang ? lang : "ru")

  return (
    <div>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        {data.contacts.title}
      </Typography>
      <ContactItem
        leftIcon={
          <PhoneIcon
            fontSize="default"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Номер телефона: "}
        rightText={
          <a href="tel:+48889559888" style={{ color: "rgba(0, 0, 0, 0.87)" }}>
            +48 889 559 888
          </a>
        }
      />
      <ContactItem
        leftIcon={
          <LocationOnIcon
            fontSize="default"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Адрес: "}
        rightText={data.contacts.place}
      />
      <ContactItem
        leftIcon={
          <AlternateEmailIcon
            fontSize="default"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Почта: "}
        rightText={
          <a
            style={{ color: "rgba(0, 0, 0, 0.87)" }}
            href="mailto:info@techtag.pl"
          >
            info@techtag.pl
          </a>
        }
      />
      <ContactItem
        leftIcon={
          <ScheduleIcon
            fontSize="default"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Адрес: "}
        rightText={
          <a style={{ color: "rgba(0, 0, 0, 0.87)" }}>{data.contacts.time}</a>
        }
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src={require("../assets/img/contactUs.svg")}
          alt="contact_us"
          style={{ width: "100%", height: "auto", maxWidth: 1000 }}
        />
      </div>
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        style={{
          height: 500,
          width: "100%",
          borderRadius: 10,
          boxShadow: "0 12px 20px -10px gray",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  )
}

export default SectionContacts

const ContactItem = ({ leftIcon, leftText, rightText }) => {
  const classes = useStyles()

  return (
    <div className={classes.item}>
      {leftIcon}
      <Typography variant="h6" style={{ textTransform: "none" }}>
        {rightText}
      </Typography>
    </div>
  )
}
