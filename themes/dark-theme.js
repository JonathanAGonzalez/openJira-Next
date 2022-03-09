import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          background: '#4a148c',
        },
      },
    },
  },
});
