import React from "react"
import Typography from "@material-ui/core/Typography"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"

const position = [52.2533308, 20.9910625]
// import { Map } from 'react-leaflet'
const SectionContacts = () => {
  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Контакты
      </Typography>
      <ContactItem
        leftIcon={
          <PhoneIcon
            fontSize="large"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Номер телефона: "}
        rightText={"+48 889 559 888"}
      />
      <ContactItem
        leftIcon={
          <LocationOnIcon
            fontSize="large"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Адрес: "}
        rightText={"ul. Warszawska, nr 6, lok. 32, miejsc. Białystok, 15-063"}
      />
      <ContactItem
        leftIcon={
          <AlternateEmailIcon
            fontSize="large"
            style={{ color: "#0D68E0", marginRight: 10 }}
          />
        }
        leftText={"Почта: "}
        rightText={"info@techtag.pl"}
      />
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        style={{ height: 500, width: "100%", borderRadius: 10, boxShadow: "0 12px 20px -10px gray" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/*<Marker position={position}>*/}
        {/*  <Popup>*/}
        {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
        {/*  </Popup>*/}
        {/*</Marker>*/}
      </MapContainer>
    </div>
  )
}

export default SectionContacts

const ContactItem = ({ leftIcon, leftText, rightText }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "6px 0",
      }}
    >
      {leftIcon}
      {/*<Typography variant="body1">{leftText}</Typography>*/}
      <Typography variant="h6" style={{ textTransform: "none" }}>
        {rightText}
      </Typography>
    </div>
  )
}
