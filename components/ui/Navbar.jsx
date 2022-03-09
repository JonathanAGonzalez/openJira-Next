import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContextValues } from '../../hooks/useContextValues';

export const Navbar = () => {
  const { openSideMenu } = useContextValues();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSideMenu} size="large">
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
