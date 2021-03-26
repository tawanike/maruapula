import { darken } from "@theme-ui/color"
import { Heading } from "theme-ui"
import colors from "./src/_theme/colors"
import fonts from "./src/_theme/fonts"
import styles from "./src/_theme/styles"

const theme = {
  containers: {
    card: {
      border: "1px solid",
      borderColor: "primary",
      backgroundColor: "primary",
      p: 5
    },
    page: {
      m: 0,
      mx: "auto",
      ...styles
    },
    sectionHead: {
      borderBottom: "1px solid",
      borderTop: "1px solid",
      borderColor: "borderColor",
      height: 40,
      display: "grid",
      placeItems: "center start",
      p: {
        m: 0,
        fontWeight: "heading",
        color: "textAlt"
      }
    },
    ul: {
      listStyle: "none",
      px: 3,
      li: {
        py: 2
      }
    },
    button: {
      display: "grid",
      placeItems: "center",
      "&:hover": { cursor: "pointer" },
      borderRadius: "5px",
      p: {
        fontWeight: "heading",
        color: "white",
        lineHeight: "0",
        fontSize: "16px"
      }
    },
    customAntBtnAccent: {
      display: "grid",
      width: "100%",
      bg: "accent",
      color: "white",
      border: "none",
      "&:hover": {
        bg: darken("accent", 0.06),
        color: "white"
      }
    },
    customAntBtnMuted: {
      display: "grid",
      width: "100%",
      bg: "muted",
      color: "white",
      border: "none",
      "&:hover": {
        bg: darken("muted", 0.06),
        color: "white"
      }
    }
  },
  ...styles,
  colors,
  ...fonts,
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ["40em", "64em", "80em"],
  text: {
    heading: {
      lineHeight: "heading",
      fontWeight: "heading"
    },
    subHead: {
      ...styles.h4
    },
    heavyP: {
      m: 0,
      fontWeight: "heading",
      color: "textAlt"
    }
  },
  center: {
    display: "grid",
    placeItems: "center"
  }
}

export default theme
