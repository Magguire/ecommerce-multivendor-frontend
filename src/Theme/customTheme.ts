import {createTheme} from "@mui/material";

// Select preferred color from UI color picker

const customTheme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#00927c',
            },
            secondary: {
                main: '#EAF0F1',
            }
        }
    }
)

export default customTheme;