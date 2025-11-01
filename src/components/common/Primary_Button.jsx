import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";


    const Primary_Button = styled(Button)( () => ({

        backgroundColor: "#DB4444",
        color: "#fff",
        fontWeight: "600",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "18px",
        textTransform: "revert",
       "&:hover": {
           backgroundColor: "#BC1121",
        },
      }));

      export default Primary_Button;