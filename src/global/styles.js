import { getStatusBarHeight } from "react-native-status-bar-height";

// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
//console.log(getStatusBarHeight());

// will be 0 on Android, because You pass true to skipAndroid
//console.log(getStatusBarHeight(true));

export const colors = {
  buttons: "#ff8c52",
  grey: "#bebebe",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  grey6: "#eeeeee",
  grey7: "#F2f9f9",
  grey10: "#d6d6d6",
  CardComment: "#86939e",
  cardbackground: "white",
  statusbar: "#ff8c52",
  heaherText: "white",
  lightgreen: "#66DF48",
  blue: "#286ef0",
  black: "#000000",
  white: "#ffffff",
  darkBlue: "#2d328a",
  pagebackground: "white",
  firebrick: "#B22222",
  red: "#FF0000",
  darkred: "#8B0000",
  crimson: "#DC143C",
  khaki: "#F0E68C",
  goldenrod: "#DAA520",
  gold: "#FFD700",
  orange: "#FFA500",
  maroon: "#800000",
  brown: "#A52A2A",
  snow: "#FFFAFA",
  ghostwhite: "#F8F8FF",
  whitesmoke: "#F5F5F5",
  aliceblue: "#F0F8FF",

  black20: "rgba(0, 0, 0, 0.2)",
  black40: "rgba(0, 0, 0, 0.4)",
  black50: "rgba(0, 0, 0, 0.5)",
  black70: "rgba(0, 0, 0, 0.7)",
  
  greyAbbey: "#53575f",
  greyGallery: "#eee",
  greyMercury: "#e5e5e5",
  greyDusty: "#999",
  greyish: "#f6f6f6",

  green: "#49a061",
  mint: "#9bd7c2",
  headerText: "white",

};

export const parameters = {
  statusBarHeight: getStatusBarHeight(),
  headerHeight: 70,

  styledButton: {
    backgroundColor: "#ff8c52",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },

  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
};

export const title = {
  color: "#ff8c52",
  fontSize: 20,
  fontWeight: "bold",
};
