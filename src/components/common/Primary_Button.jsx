import React from 'react'
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";


    const MyButton = styled(Button)( () => ({

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

      export default MyButton;