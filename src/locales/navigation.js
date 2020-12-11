import navigationJson from "./navigation.json"
export const navigation = lang => {
  return navigationJson[lang]
}
