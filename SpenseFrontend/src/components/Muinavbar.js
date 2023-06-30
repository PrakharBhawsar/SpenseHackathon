import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssistantIcon from "@mui/icons-material/Assistant";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import TvIcon from "@mui/icons-material/Tv";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import DevicesIcon from "@mui/icons-material/Devices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import EarbudsBatteryIcon from "@mui/icons-material/EarbudsBattery";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LogoutIcon from "@mui/icons-material/Logout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TocIcon from "@mui/icons-material/Toc";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Muinavbar({ cartDataLength }) {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const handleSearchSubmit = () => {
    navigate(`/Filter/${search}`);
  };
  const gotocart = () => {
    navigate("/cart");
  };
  const gotoprofile = () => {
    navigate("/profile");
  };
  const gotoorders = () => {
    navigate("/orders");
  };

  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setopenPopup] = useState(false);
  const [signup, setsignup] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(false);
  const [Username, setUsername] = useState("");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = () => {
    setopenPopup(!openPopup);
    setsignup(!signup);
  };
  React.useEffect(() => {
    const check = localStorage.getItem("LoginUser");
    setLoginStatus(check);
    const un = localStorage.getItem("Username");
    setUsername(un);
  }, []);

  const [register, setregister] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: 0,
    Gender: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregister({ ...register, [name]: value });
  };
  const handleSubmit = async () => {
    await axios
      .post("https://hackathonecommerce.cyclic.app/Register", register)
      .then((res) => {
        alert(res.data.message);
        const { data } = res.data;
        localStorage.setItem("LoginUser", true);
        localStorage.setItem("UserId", data._id);
        localStorage.setItem("Username", data.FirstName);
        setsignup(false);
        setregister({
          FirstName: "",
          LastName: "",
          Email: "",
          Mobile: 0,
          Gender: "",
          Password: "",
        });
      });
  };
  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleLoginSubmit = async () => {
    await axios
      .post("https://hackathonecommerce.cyclic.app/Login", login)
      .then((res) => {
        alert(res.data.message);
        const { data } = res.data;
        if (res.data.success) {
          localStorage.setItem("LoginUser", true);
          localStorage.setItem("UserId", data._id);
          localStorage.setItem("Username", data.FirstName);
          setopenPopup(false);
        }
        setLogin({
          Email: "",
          Password: "",
        });
      });
  };
    const handleLogout = ()=>{
      localStorage.removeItem("LoginUser");
      localStorage.removeItem("UserId");
      localStorage.removeItem("Username");
      localStorage.removeItem("cartdata");
      alert('Logout Success');
    }
  const [cdl, setcdl] = useState(0);

  React.useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartdata"));
    const cartDataLengt = cartData ? cartData.length : 0;
    setcdl(cartDataLengt);
  }, []);

  const handleCategory = (category) => {
    navigate(`/Filter/${category}`);
    SetIsDrawerOpen(false);
  };
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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => gotoprofile()}>
        <AccountBoxIcon sx={{ mr: 2 }} />
        My Profile
      </MenuItem>
      <MenuItem onClick={() => gotoorders()}>
        <TocIcon sx={{ mr: 2 }} />
        My Orders
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <MonetizationOnIcon sx={{ mr: 2 }} />
        Gold Coins
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <EmojiEventsIcon sx={{ mr: 2 }} />
        Rewards/Coupons
      </MenuItem>
      <MenuItem onClick={() => navigate("/login")}>
        <LogoutIcon sx={{ mr: 2 }} />
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
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
          sx={{ mr: 5 }}
        >
          <AccountCircle />
          <Typography sx={{ ml: 1 }}>Profile</Typography>
        </IconButton>
        <IconButton size="large" color="inherit" sx={{ mr: 5 }}>
          <AddBusinessIcon />
          <a
            href="http://hackathonvendor.netlify.app"
            rel="noreference"
            style={{ color: "#000" }}
          >
            <Typography sx={{ ml: 2 }}>Start Selling</Typography>
          </a>
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          aria-label="Shopping Cart"
          color="inherit"
          sx={{ mr: 5 }}
          onClick={() => gotocart()}
        >
          <Badge badgeContent={7} color="error">
            <ShoppingCartIcon />
          </Badge>
          <Typography sx={{ ml: 1 }}>Cart</Typography>
        </IconButton>
      </MenuItem>
    </Menu>
  );
  // console.log(renderMobileMenu,renderMenu)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ color: "#222020", backgroundColor: "#fdd835" }}
      >
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
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => SetIsDrawerOpen(false)}
          >
            <Box
              p={2}
              width={250}
              textAlign="left"
              role="presentation"
              color="inherit"
              sx={{ backgroundColor: "#eeeeee" }}
            >
              <Typography
                variant="h5"
                sx={{
                  mt: 1,
                  mb: 1,
                  pl: 1,
                  color: "#bb4430",
                  textAlign: "left",
                }}
              >
                INSTAMART
              </Typography>
              <Divider />

              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Grocery")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<AssistantIcon />}
                >
                  Grocery
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("All")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<LocalOfferIcon />}
                >
                  Top Offers
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Mobile")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<PhoneAndroidIcon />}
                >
                  Mobiles
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Laptop")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<LaptopMacIcon />}
                >
                  Laptops
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("FASHION")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<CheckroomIcon />}
                >
                  Fashion
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("ELECTRONIC")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<DevicesIcon />}
                >
                  Electronics
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Furniture")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<ChairIcon />}
                >
                  Home & Furniture
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Appliances")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<TvIcon />}
                >
                  Appliances
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Accessories")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<EarbudsBatteryIcon />}
                >
                  Accessories
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Beauty")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<SanitizerIcon />}
                >
                  Beauty
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Sports")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<SportsCricketIcon />}
                >
                  Sports
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Healthcare")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<HealthAndSafetyIcon />}
                >
                  Healthcare
                </Button>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Button
                  onClick={() => handleCategory("Fitness")}
                  sx={{
                    color: "black",
                    width: "100%",
                    display: "flex",
                    justifyContent: "left",
                  }}
                  size="large"
                  startIcon={<FitnessCenterIcon />}
                >
                  Fitness
                </Button>
              </Box>
            </Box>
          </Drawer>
          <Box sx={{ mr: 2 }}>INSTAMART</Box>
          <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => setsearch(e.target.value)}
              value={search}
              placeholder="Search For Products…"
              inputProps={{ "aria-label": "search" }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearchSubmit();
                }
              }}
            />
          </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <a
              href="http://hackathonvendor.netlify.app"
              rel="noreference"
              color="black"
              style={{ display: "flex" }}
            >
              <IconButton size="large" color="inherit" sx={{ mr: 5 }}>
                <AddBusinessIcon />
                <Typography sx={{ ml: 2 }}>Start Selling</Typography>
              </IconButton>
            </a>

            {/* ***Profile*** */}
            {LoginStatus ? (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
                sx={{ mr: 5 }}
              >
                <AccountCircle />
                <Typography
                  textAlign={"center"}
                  sx={{ ml: 1, fontSize: "0.9rem" }}
                >
                  Hello, <br /> {Username !== "" ? Username : "Profile"}
                </Typography>
              </IconButton>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => setopenPopup(true)}
                color="inherit"
                sx={{ mr: 5 }}
              >
                <AccountCircle />
                <Typography sx={{ ml: 1 }}>Login</Typography>
              </IconButton>
            )}
            <Dialog open={openPopup} onClose={() => setopenPopup(false)}>
              <Box sx={{ width: 400, height: 600 }}>
                <DialogTitle
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Login Details
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setopenPopup(false)}
                  >
                    X
                  </span>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1.5, width: "90%" },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: 400,
                    }}
                  >
                    <TextField
                      type="email"
                      name="Email"
                      value={login.Email}
                      onChange={handleLoginChange}
                      variant="standard"
                      label="Email"
                      fullWidth
                    />
                    <TextField
                      type="password"
                      name="Password"
                      value={login.Password}
                      onChange={handleLoginChange}
                      variant="standard"
                      label="Password"
                      fullWidth
                    />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      type="button"
                      onClick={handleLoginSubmit}
                      color="error"
                      sx={{ width: "90%", height: 50, bgcolor: "#bb4430" }}
                    >
                      Login
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button size="small" onClick={() => handleClick()}>
                      New to Instamart? Create an Account
                    </Button>
                  </Box>
                </DialogContent>
              </Box>
            </Dialog>

            {/* --signup----         */}
            <Dialog
              open={signup}
              onClose={() => setsignup(false)}
              sx={{ mt: -3 }}
            >
              <Box sx={{ width: 500, height: 600, bgcolor: "#fff" }}>
                <DialogTitle
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Create an Account
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setsignup(false)}
                  >
                    X
                  </span>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1.2, width: "96%" },
                      mt: -2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: 450,
                    }}
                  >
                    <Box
                      component="div"
                      sx={{ display: "flex", width: "100%" }}
                    >
                      <TextField
                        required
                        sx={{ width: "50%" }}
                        type="text"
                        name="FirstName"
                        value={register.FirstName}
                        onChange={handleChange}
                        variant="standard"
                        label="First Name"
                      ></TextField>
                      <TextField
                        required
                        sx={{ width: "50%" }}
                        type="text"
                        name="LastName"
                        value={register.LastName}
                        onChange={handleChange}
                        variant="standard"
                        label="Last Name"
                      ></TextField>
                    </Box>
                    <TextField
                      required
                      type="email"
                      name="Email"
                      value={register.Email}
                      onChange={handleChange}
                      variant="standard"
                      label="Email"
                    ></TextField>
                    <TextField
                      required
                      type="tel"
                      name="Mobile"
                      value={register.Mobile === 0 ? "" : register.Mobile}
                      onChange={handleChange}
                      variant="standard"
                      label="Mobile Number"
                    ></TextField>
                    <TextField
                      required
                      type="password"
                      name="Password"
                      value={register.Password}
                      onChange={handleChange}
                      variant="standard"
                      label="Password"
                    ></TextField>
                    <FormControl required sx={{ width: "93%" }}>
                      <FormLabel sx={{ textAlign: "left", mt: 2 }}>
                        Your Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        sx={{ mr: 1 }}
                        name="Gender"
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="others"
                          control={<Radio />}
                          label="Others"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ mt: 1, width: "80%", bgcolor: "#bb4430" }}
                      type="button"
                      onClick={handleSubmit}
                    >
                      Create Account
                    </Button>
                    <br />
                    <Button size="small" onClick={() => handleClick()}>
                      Already a Customer? Login
                    </Button>
                  </Box>
                </DialogContent>
              </Box>
            </Dialog>

            <IconButton
              size="large"
              edge="end"
              aria-label="Shopping Cart"
              color="inherit"
              sx={{ mr: 5 }}
              onClick={() => gotocart()}
            >
              <Badge
                badgeContent={cartDataLength !== 0 ? cartDataLength : cdl}
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
              <Typography sx={{ ml: 1 }}>Cart</Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
    </Box>
  );
}
