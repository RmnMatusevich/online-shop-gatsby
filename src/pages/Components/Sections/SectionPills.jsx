import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined"
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined"
import DevicesOtherIcon from "@material-ui/icons/DevicesOther"
import SettingsInputHdmiOutlinedIcon from "@material-ui/icons/SettingsInputHdmiOutlined"
import MemoryIcon from "@material-ui/icons/Memory"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import NavPills from "components/NavPills/NavPills.jsx"
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx"
import { navigation } from "../../../locales/navigation"

class SectionPills extends React.Component {
  render() {
    const { classes, lang } = this.props
    const data = navigation(lang ? lang : "ru")

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} lg={6}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: data.repair.title,
                      tabIcon: BuildOutlinedIcon,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: data.sell.title,
                      tabIcon: MonetizationOnOutlinedIcon,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: data.buy.title,
                      tabIcon: DevicesOtherIcon,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: data.accessories.title,
                      tabIcon: SettingsInputHdmiOutlinedIcon,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: data.spares.title,
                      tabIcon: MemoryIcon,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: data.information.title,
                      tabIcon: InfoOutlinedIcon,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      ),
                    },
                  ]}
                />
              </GridItem>
              {/*<GridItem xs={12} sm={12} md={12} lg={6}>*/}
              {/*  <NavPills*/}
              {/*    color="primary"*/}
              {/*    horizontal={{*/}
              {/*      tabsGrid: { xs: 12, sm: 4, md: 4 },*/}
              {/*      contentGrid: { xs: 12, sm: 8, md: 8 },*/}
              {/*    }}*/}
              {/*    tabs={[*/}
              {/*      {*/}
              {/*        tabButton: "Repair",*/}
              {/*        tabIcon: BuildOutlinedIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Collaboratively administrate empowered markets via*/}
              {/*              plug-and-play networks. Dynamically procrastinate*/}
              {/*              B2C users after installed base benefits.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically visualize customer directed convergence*/}
              {/*              without revolutionary ROI. Collaboratively*/}
              {/*              administrate empowered markets via plug-and-play*/}
              {/*              networks. Dynamically procrastinate B2C users after*/}
              {/*              installed base benefits.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically visualize customer directed convergence*/}
              {/*              without revolutionary ROI. Collaboratively*/}
              {/*              administrate empowered markets via plug-and-play*/}
              {/*              networks. Dynamically procrastinate B2C users after*/}
              {/*              installed base benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*      {*/}
              {/*        tabButton: "Sell",*/}
              {/*        tabIcon: MonetizationOnOutlinedIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Efficiently unleash cross-media information without*/}
              {/*              cross-media value. Quickly maximize timely*/}
              {/*              deliverables for real-time schemas.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically maintain clicks-and-mortar solutions*/}
              {/*              without functional solutions. Dramatically visualize*/}
              {/*              customer directed convergence without revolutionary*/}
              {/*              ROI. Collaboratively administrate empowered markets*/}
              {/*              via plug-and-play networks. Dynamically*/}
              {/*              procrastinate B2C users after installed base*/}
              {/*              benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*      {*/}
              {/*        tabButton: "Buy",*/}
              {/*        tabIcon: DevicesOtherIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Efficiently unleash cross-media information without*/}
              {/*              cross-media value. Quickly maximize timely*/}
              {/*              deliverables for real-time schemas.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically maintain clicks-and-mortar solutions*/}
              {/*              without functional solutions. Dramatically visualize*/}
              {/*              customer directed convergence without revolutionary*/}
              {/*              ROI. Collaboratively administrate empowered markets*/}
              {/*              via plug-and-play networks. Dynamically*/}
              {/*              procrastinate B2C users after installed base*/}
              {/*              benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*      {*/}
              {/*        tabButton: "Accessories",*/}
              {/*        tabIcon: SettingsInputHdmiOutlinedIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Efficiently unleash cross-media information without*/}
              {/*              cross-media value. Quickly maximize timely*/}
              {/*              deliverables for real-time schemas.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically maintain clicks-and-mortar solutions*/}
              {/*              without functional solutions. Dramatically visualize*/}
              {/*              customer directed convergence without revolutionary*/}
              {/*              ROI. Collaboratively administrate empowered markets*/}
              {/*              via plug-and-play networks. Dynamically*/}
              {/*              procrastinate B2C users after installed base*/}
              {/*              benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*      {*/}
              {/*        tabButton: "Spares",*/}
              {/*        tabIcon: MemoryIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Efficiently unleash cross-media information without*/}
              {/*              cross-media value. Quickly maximize timely*/}
              {/*              deliverables for real-time schemas.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically maintain clicks-and-mortar solutions*/}
              {/*              without functional solutions. Dramatically visualize*/}
              {/*              customer directed convergence without revolutionary*/}
              {/*              ROI. Collaboratively administrate empowered markets*/}
              {/*              via plug-and-play networks. Dynamically*/}
              {/*              procrastinate B2C users after installed base*/}
              {/*              benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*      {*/}
              {/*        tabButton: "Information",*/}
              {/*        tabIcon: InfoOutlinedIcon,*/}
              {/*        tabContent: (*/}
              {/*          <span>*/}
              {/*            <p>*/}
              {/*              Efficiently unleash cross-media information without*/}
              {/*              cross-media value. Quickly maximize timely*/}
              {/*              deliverables for real-time schemas.*/}
              {/*            </p>*/}
              {/*            <br />*/}
              {/*            <p>*/}
              {/*              Dramatically maintain clicks-and-mortar solutions*/}
              {/*              without functional solutions. Dramatically visualize*/}
              {/*              customer directed convergence without revolutionary*/}
              {/*              ROI. Collaboratively administrate empowered markets*/}
              {/*              via plug-and-play networks. Dynamically*/}
              {/*              procrastinate B2C users after installed base*/}
              {/*              benefits.*/}
              {/*            </p>*/}
              {/*          </span>*/}
              {/*        ),*/}
              {/*      },*/}
              {/*    ]}*/}
              {/*  />*/}
              {/*</GridItem>*/}
            </GridContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(pillsStyle)(SectionPills)
