import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"
import SEO from "../../components/seo"
import { Helmet } from "react-helmet"
import ReactMarkdown from "react-markdown"

const Components = props => {
  const { classes, ...rest } = props

  return (
    <div>
      <Helmet>
        <meta name="yandex-verification" content="0d1b788a734b13b9" />
      </Helmet>
      <SEO
        title="Home"
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
      <Parallax image={require("../../../static/img/backgroundmain.svg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Tech Tag</h1>
                <h3 className={classes.subtitle}>Look into the future</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <ReactMarkdown>
          > **Ремонт цифровой техники в сервисном центре TechTag**

          > Ремонт смартфонов: iPhone, Samsung, Xiaomi, Huawei, Sony, Lenovo, ZTE, Nokia, HTC, LG.

          > Ремонт ноутбуков: MacBook, HP, ASUS, Acer, Lenovo, Toshiba, MSI, Dell.

          > Ремонт планшетов: iPad, Samsung, ASUS, Lenovo, Xiaomi, TeXet, Huawei, Prestigio, Digma.

          > Ремонт часов: Apple, Samsung, LG.

          > Ремонт навигаторов.

          > Ремонт электронных книг.

          > Восстановление ПО.

          > Это только малая часть того, что способны отремонтировать наши мастера. Мы также берёмся за починку цифровой техники малоизвестных брендов. Большинство сервисных центров боятся таких сложностей, но только не TechTag.


          *Обращайтесь за консультацией к нашим операторам, мы наверняка сможем вам помочь!*


          Помимо этого, наша компания поможет разобраться с программным обеспечением: перепрошить, разблокировать смартфон или планшет, русифицировать устройство. Мы можем восстановить утерянные данные. Также у нас можно приобрести аксессуары бренда Apple: наушники, зарядные устройства, чехлы и защитные плёнки.


          Для офисов и юридических лиц оказываем индивидуальные услуги по подготовке и настройке рабочих мест.
        </ReactMarkdown>
        <SectionCarousel />
        <ReactMarkdown>
          ## **Ремонт цифровой техники в сервисном центре TechTag**



          Ремонт смартфонов: iPhone, Samsung, Xiaomi, Huawei, Sony, Lenovo, ZTE, Nokia, HTC, LG.

          Ремонт ноутбуков: MacBook, HP, ASUS, Acer, Lenovo, Toshiba, MSI, Dell.

          Ремонт планшетов: iPad, Samsung, ASUS, Lenovo, Xiaomi, TeXet, Huawei, Prestigio, Digma.

          Ремонт часов: Apple, Samsung, LG.

          Ремонт навигаторов.

          Ремонт электронных книг.

          Восстановление ПО.

          Это только малая часть того, что способны отремонтировать наши мастера. Мы также берёмся за починку цифровой техники малоизвестных брендов. Большинство сервисных центров боятся таких сложностей, но только не TechTag.


          ### *Обращайтесь за консультацией к нашим операторам, мы наверняка сможем вам помочь!*


          ***Помимо этого, наша компания поможет разобраться с программным обеспечением: перепрошить, разблокировать смартфон или планшет, русифицировать устройство. Мы можем восстановить утерянные данные. Также у нас можно приобрести аксессуары бренда Apple: наушники, зарядные устройства, чехлы и защитные плёнки.***


          Для офисов и юридических лиц оказываем индивидуальные услуги по подготовке и настройке рабочих мест. Проводим интернет-соединение, комплексное обслуживание офисной техники, ставим необходимый для сотрудников софт.

        </ReactMarkdown>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(componentsStyle)(Components)
