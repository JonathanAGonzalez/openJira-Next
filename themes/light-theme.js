import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[100],
    },
    primary: {
      main: '#4a148c',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
