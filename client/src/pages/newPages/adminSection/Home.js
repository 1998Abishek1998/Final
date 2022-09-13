import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AdminNav from './components/AdminNav';
import CompanyDetails from './pages/CompanyDetails';
import UserDetails from './pages/UserDetails';
import PostDetails from './pages/PostDetails';
import CommentDetails from './pages/CommentDetails';
import InvitationsDetails from './pages/InvitationsDetails';

const drawerWidth = 240;

export default function ClippedDrawer() {

  const [ menuValue, setMenuValue] = useState(1)
  const menuItems = [
    {
      id: 'menu1',
      name: 'Company',
      icon: <InboxIcon />,
      value: 1,
    },
    {
      id: 'menu2',
      name: 'User',
      icon: <InboxIcon />,
      value: 2,
    },
    {
      id: 'menu3',
      name: 'Post',
      icon: <InboxIcon />,
      value: 3,
    },
    {
      id: 'menu4',
      name: 'Comments',
      icon: <InboxIcon />,
      value: 4,
    },
    {
      id: 'menu5',
      name: 'Invitations',
      icon: <InboxIcon />,
      value: 5,
    }
  ]

  const handleItemClick = (e, index) =>{
    e.preventDefault()
    setMenuValue(index + 1)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminNav menuItems={menuItems} handleItemClick={handleItemClick}/>
      <Drawer
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          flexGrow: 1, 
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'hidden' }}>
          <List>
            {menuItems.map((itm, index) => (
              <>
              <ListItem key={itm.id} disablePadding>
                <ListItemButton onClick={(e) => handleItemClick(e, index)}>
                  <ListItemIcon>
                    {itm.icon}
                  </ListItemIcon>
                  <ListItemText primary={itm.name} />
                </ListItemButton>
              </ListItem>
              { index % 2 === 0 ? <Divider/> : <></>}
              </>
              ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {
          menuValue === 1 && <CompanyDetails/>
        }
        {
          menuValue === 2 && <UserDetails/>
        }
        {
          menuValue === 3 && <PostDetails/>
        }
        {
          menuValue === 4 && <CommentDetails/>
        }
        {
          menuValue === 5 && <InvitationsDetails/>
        }
      </Box>
    </Box>
  );
}