import navigationJson from "./navigation.json"
export const navigation = lang => {
  console.log(navigationJson[lang])
  console.log(navigationJson)
  return navigationJson[lang]
}
