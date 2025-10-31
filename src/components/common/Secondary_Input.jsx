import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';



const Secondary_Input = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
      backgroundColor: 'transparent',
      borderRadius: 5,
    //   paddingRight: 8,
    },

    '& .MuiInputBase-input': {
      color: 'white',
      fontSize: 16,
      padding: '10px 7px',
      
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffff',
      },
      '&:hover fieldset': {
        borderColor: '#ffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffff'
      },
    },
  }));

  export default Secondary_Input;