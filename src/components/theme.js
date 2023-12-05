import { extendTheme } from "native-base";

import { colors, fonts } from "../styles/style";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: fonts.REGULARE,
        color: colors.dark,
      },
    },
    Input: {
      baseStyle: {
        fontFamily: fonts.REGULARE,
        color: colors.dark,
        textAlign: "right",
        fontSize: 14,
        _focus: {
          //borderWidth:1,
          //borderColor:'#ffbb00',
          //backgroundColor:'transparent'
          selectionColor: colors.primary,
        },
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "success",
        bg: colors.primary,
      },
      baseStyle: {
        height: 54.1,
        borderRadius: 26,
        _text: {
          fontFamily: fonts.REGULARE,
        },
      },
    },
  },
  colors: {
    // Add new color
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
