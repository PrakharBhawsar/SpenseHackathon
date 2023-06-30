import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AssistantIcon from '@mui/icons-material/Assistant';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChairIcon from '@mui/icons-material/Chair';
import TvIcon from '@mui/icons-material/Tv';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DevicesIcon from '@mui/icons-material/Devices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
// import AirplayIcon from '@mui/icons-material/Airplay';
import { Divider, Drawer } from '@mui/material';
import { useState } from 'react'
// import { text } from 'stream/consumers';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TocIcon from '@mui/icons-material/Toc';
import { useNavigate } from 'react-router';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbarcart  ({cartDataLength}) {

  const navigate = useNavigate();
  // const gotocart = () =>{
  //   navigate('/cart');
  // }
  const gotoprofile = () =>{
    navigate('/profile');
  }
  const gotoorders = () =>{
    navigate('/orders');
  }

    const [isDrawerOpen, SetIsDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => gotoprofile()}><AccountBoxIcon  sx={{mr:2}}/>My Profile</MenuItem>
      <MenuItem onClick={() => gotoorders()}><TocIcon sx={{mr:2}}/>My Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}><MonetizationOnIcon sx={{mr:2}}/>{""}Gold Coins</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}><BookmarkBorderIcon sx={{mr:2}}/>Wishlist</MenuItem> */}
      <MenuItem onClick={handleMenuClose}><EmojiEventsIcon sx={{mr:2}}/>Rewards/Coupons</MenuItem>
      <MenuItem onClick={() => navigate('/login')}><LogoutIcon sx={{mr:2}}/>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{mr:5}}
            >
              <AccountCircle />
              <Typography sx={{ml:1}} >Profile</Typography>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              sx={{mr:5}}
            >
              {/* <Badge badgeContent={17} color="error"> */}
                <AddBusinessIcon />
              {/* </Badge> */}
              <Typography sx={{ml:2}} >Start Selling</Typography>
            </IconButton>
            
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{color:'#222020',backgroundColor:'#fdd835'}} >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => SetIsDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => SetIsDrawerOpen(false)}>
                <Box p={2}  width={250} textAlign='left' role='presentation' color='inherit' sx={{backgroundColor:'#eeeeee'}} >
                        <Typography variant='h5' sx={{mt:1,ml:1, mb:1,color:'#bb4430'}} > INSTAMART</Typography>
                    <Divider />
                    
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<AssistantIcon /> }>Grocery</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<LocalOfferIcon /> }>Top Offers</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<PhoneAndroidIcon /> }>Mobiles</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<LaptopMacIcon /> }>Laptops</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<CheckroomIcon /> }>Fashion</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<DevicesIcon /> }>Electronics</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<ChairIcon /> }>Home & Furniture</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<TvIcon /> }>Appliances</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<EarbudsBatteryIcon /> }>Accessories</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<SanitizerIcon /> }>Beauty</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<SportsCricketIcon /> }>Sports</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<HealthAndSafetyIcon /> }>Healthcare</Button>
                    </Box>
                    <Box sx={{display:'flex', mt:1}}>
                    <Button sx={{color:'black'}} size='large' startIcon={<FitnessCenterIcon /> }>Fitness</Button>
                    </Box>
                </Box>
            </Drawer>
            <Box sx={{mr:2}}>LOGO</Box>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase sx={{width:400}}
              placeholder="Search For Products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              color="inherit"
              sx={{mr:5}}
            >
              {/* <Badge badgeContent={17} color="error"> */}
                <AddBusinessIcon />
              {/* </Badge> */}
              <Typography sx={{ml:2}} >Start Selling</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{mr:5}}
            >
              <AccountCircle />
              <Typography sx={{ml:1}} >Profile</Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}