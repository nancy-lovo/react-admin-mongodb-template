import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles(
    (theme) => ({
        deleteButton: {
            color: theme.palette.error.main,
            "&:hover": {
                backgroundColor: fade(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                "@media (hover: none)": {
                    backgroundColor: "transparent",
                },
            },
        },
    }),
    { name: "RaDeleteWithConfirmButton" }
);
