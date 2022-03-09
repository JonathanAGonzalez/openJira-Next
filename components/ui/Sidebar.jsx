import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useContext } from 'react';
import { UiContext } from '../../context/ui';
const Sidebar = () => {
  const menuItems = ['Inbox', 'Starred', 'Sent Mail', 'Drafts', 'Trash'];

  const { sideMenuOpen, closeSideMenu } = useContext(UiContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
