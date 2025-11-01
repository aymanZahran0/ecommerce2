import {Menu} from '@mui/material'
import { styled } from "@mui/material/styles";


    const Nav_Menu = styled(Menu)( ({theme}) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color: 'white',
            backgroundColor:'rgba(156, 152, 157, .8)',
            // backgroundColor: theme.palette.grey[400],
            backdropFilter: 'blur(10px)',
            boxShadow:
              'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
              padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
              '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: '#ffb',
                // color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                ...theme.applyStyles('dark', {
                  color: 'inherit',
                }),
              },
            },
            ...theme.applyStyles('dark', {
              color: theme.palette.grey[300],
            }),
        },
    
      }));

      export default Nav_Menu;