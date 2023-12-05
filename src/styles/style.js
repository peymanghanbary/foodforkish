import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const { width: w, height: h } = Dimensions.get("screen");
//const statusbarH = StatusBar.currentHeight;
export const lineHeights = {
  itemTitle: 21,
};

// '#facc15'
// #8cc643
// #ef394e
export const colors = {
  rose500: "#f43f5e",
  primary: "#4FAB5E",
  dark: "#585858",
  icon: "#585858",
  gray: "#78716c",
  star: "gold",
  black: "#000",
  white: "#fff",
  marker: "#cc0001",
  red: "#ef4056",
  btn: "#4FAB5E",
  btnRed: "#E22A38",
  warning300: "#fdba74",
  violet300: "#c4b5fd",
};

export const fonts = {
  BOLD: "irsb",
  BOLD_EN: "irseb",
  EN: "irse",
  REGULARE: "irs",
  MEDIUM: "irsm",
  LIGHT: "irsl",
  BOLDLIGHT: "irsbl",
  ULTRA: "irsu",
};

export const heights = {
  H: height,
  bottomtabnavigation: 70,
};

export const widths = {
  W: width,
};

export const paddings = {
  screen: 15,
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6.5,
    elevation: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingRight: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    textAlign: "right",
    fontFamily: "IranSansBold",
  },
  caption: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSans",
  },
  walletTitle: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSansBold",
  },
  wallet: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "right",
    fontFamily: "IranSansBold",
    color: "#22c55e",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  noInputPadding: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  iosScaleX: {
    transform: [{ scaleX: -1 }],
  },
  iosScaleY: {
    transform: [{ scaleY: -1 }],
  },
  inputTouchableOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default style;
