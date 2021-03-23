import { darken } from "@theme-ui/color";
import { Heading } from "theme-ui";
import colors from "src/theme/colors";
import fonts from "src/theme/fonts";
import styles from "src/theme/styles";

const theme = {
    containers: {
        card: {
            border: "1px solid",
            borderColor: "primary",
            backgroundColor: "primary",
            p: 2,
            boxShadow:
                "0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
        },
        page: {
            m: 0,
            mx: "auto",
            ...styles,
        },
        player: {
            backgroundColor: "primary",
            boxShadow:
                "0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
            borderTop: "1px solid",
            borderColor: "borderColor",
            height: "60px",
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
                color: "textAlt",
            },
        },
        ul: {
            listStyle: "none",
            px: 3,
            li: {
                py: 2,
            },
        },
        button: {
            display: "grid",
            placeItems: "center",
            "&:hover": { cursor: "pointer" },
            p: {
                m: 0,
                fontWeight: "heading",
                color: "white",
            },
        },
        customAntBtnDanger: {
            display: "grid",
            width: "100%",
            bg: "accent",
            color: "white",
            border: "none",
            "&:hover": {
                bg: darken("accent", 0.06),
                color: "white",
            },
        },
    },
    ...styles,
    colors,
    ...fonts,
    space: [0, 4, 8, 16, 32, 48],
    breakpoints: ["40em", "64em", "80em"],
    text: {
        heading: {
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
        },
        subHead: {
            ...styles.h4,
        },
        heavyP: {
            m: 0,
            fontWeight: "heading",
            color: "textAlt",
        },
    },
    playerIcon: {
        fontSize: "3",
        "&:hover": {
            cursor: "pointer",
            color: "textAlt",
        },
        color: "secondary",
    },
    center: {
        display: "grid",
        placeItems: "center",
    },
};

export default theme;
