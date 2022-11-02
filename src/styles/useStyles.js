import { createTheme, alpha } from "@mui/material/styles";
import { create } from "@mui/material/styles/createTransitions";

const useStyles = createTheme({
    root: {
        display: 'flex'
    },

    cards: {
        width: 200,
        border: '1px solid #efefef',
        borderRadius: '2px',
        borderShadow: '5px 5px 5px'
    }
})

export default useStyles;