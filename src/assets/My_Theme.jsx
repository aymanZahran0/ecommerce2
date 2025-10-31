import { createTheme } from '@mui/material'


const My_Theme = createTheme({
    palette:{
      mainColor:{
        main:'#DB4444',
      },
      mutedColor:{
        main:'#AFAFAF'
      }
    },
    typography:{
      fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
      
    }
  }); 

  export default My_Theme ;