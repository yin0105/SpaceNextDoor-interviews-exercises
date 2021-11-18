import {createMuiTheme} from "@material-ui/core/styles"

export const MuiTheme = createMuiTheme({
    spacing: 2,
    palette: {
        primary: {
            light: "#007FAF",
            main: "#00A0E3",
            dark: "#007FAF"
        },
        secondary: {
            main: "#EA5B21",
            light: "#FFD8C8"
        },
        error: {
            main: "#E53535"
        },
        warning: {
            main: "#FDDD48"
        },
        success: {
            main: "#06C270"
        },
        grey: {
            50: "#E9E9E9",
            100: "#989898",
            200: "#333333"
        },
        background: {
            default: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: "35px"
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.2rem",
            lineHeight: "30px"
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.8rem",
            lineHeight: "20px"
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: '18px'
        },
        h6: {
            fontWeight: 600,
            fontSize: "1.4rem",
            lineHeight: "18px"
        },
        body1: {
            fontWeight: 400,
            fontSize: "1.4rem",
            lineHeight: "20px"
        },
        body2: {
            fontWeight: 400,
            fontSize: "1.2rem",
            lineHeight: "2rem"
        },
        caption: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "20px"
        }
    }
})
