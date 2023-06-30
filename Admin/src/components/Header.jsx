import React from 'react'
import { ListItemText,ListItemIcon,ListItemButton,ListItem,List,Drawer,CssBaseline,Toolbar,Typography,AppBar,Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

//icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FaceIcon from "@mui/icons-material/Face";
export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#6945FF" }}
      >
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
             Admin Panal
          </Typography>
          <AccountCircleIcon/>
        </Toolbar>
      </AppBar>
      <Sidebar/>
      </>
  )
}


// ***SideBar***

function Sidebar() {

const navigate = useNavigate();
const Logout=()=>{
  localStorage.removeItem('login');
  navigate('/')
}
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem sx={{ height: 130, flexDirection: "column" }}>
              <ListItemIcon>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  height="64px"
                  width="60px"
                  alt="profileImg"
                />
                <br></br>
              </ListItemIcon>
              <Typography sx={{ fontSize: "14px", color: "#6C7177" }}>
                Welcome
              </Typography>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/Users')}>
                <ListItemIcon>
                  <ApartmentIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Products" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/manageVendor')}>
                <ListItemIcon>
                  <FaceIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "14px" }}
                  primary="Vendor"
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/Orders')}>
                <ListItemIcon>
                  <FaceIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "14px" }}
                  primary="Orders"
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/Offer')}>
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "14px" }}
                  primary="Offer"
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/Couponcode')}>
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "14px" }}
                  primary="Coupan Code"
                />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton onClick={Logout}>
                <ListItemIcon>
                  <ApartmentIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ fontSize: "14px" }}
                  primary="Logout"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

