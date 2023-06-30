import React from "react";
import {
  Box,
  Divider,
  Typography,
  Select,
  IconButton,
  Button,
  MenuItem,
  TextField,
  InputLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Stack,
} from "@mui/material";
import Muinavbar from "./Muinavbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
// import { Form } from 'react-router-dom';
import SendIcon from "@mui/icons-material/Send";

export default function Profile({cartDataLength}) {
  const navigate = useNavigate();
  const gotoorders = () => {
    navigate("/orders");
  };
  const gotocart = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* header */}

      <Muinavbar cartDataLength={cartDataLength}/>

      <center>
        <Box
          sx={{
            width: "95%",
            height: 700,
            mt: 10,
            pt: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 300, height: 600, bgcolor: "white" }}>
            <Box
              sx={{
                width: "100%",
                height: 80,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "25%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AccountCircleIcon sx={{ width: 60, height: 60 }} />
              </Box>
              <Box
                sx={{
                  width: "75%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="subtitle2" textAlign={"left"}>
                  Hello,
                </Typography>
                <Typography variant="h6" textAlign={"left"}>
                  Priyanshu Malaiya Jain
                </Typography>
              </Box>
            </Box>
            <Divider />
            <br />
            <Box sx={{ width: "80%", height: 500, textAlign: "left" }}>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Profile Information
              </Button>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Addresses
              </Button>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
                onClick={() => gotoorders()}
              >
                my order
              </Button>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Rewards & Coupons
              </Button>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
                onClick={() => gotocart()}
              >
                My Cart
              </Button>
              <Button
                size="large"
                sx={{
                  color: "black",
                  fontSize: 15,
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: 880, height: 600, bgcolor: "white" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1.5, width: "40%" },
                height: 500,
              }}
            >
              <Typography
                variant="h6"
                sx={{ width: "85%", textAlign: "left", m: 4 }}
              >
                Personal Information
                <Button sx={{ textTransform: "none" }}>Edit</Button>
              </Typography>
              <TextField
                type="text"
                variant="outlined"
                defaultValue="Priyanshu"
                label="First Name"
              ></TextField>
              <TextField
                type="text"
                variant="outlined"
                defaultValue="Malaiya Jain"
                label="Last Name"
              ></TextField>
              <br />
              <br />
              <FormControl sx={{ mr: 55 }}>
                <FormLabel sx={{ textAlign: "left", mt: 1 }}>
                  Your Gender
                </FormLabel>
                <RadioGroup row defaultValue="male">
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
              <br />
              <br />
              <Stack paddingLeft={"62px"}>
                <TextField
                  type="tel"
                  variant="outlined"
                  defaultValue="9516776787"
                  label="Mobile Number"
                ></TextField>
                <br />
                <br />
              </Stack>
              <Stack paddingLeft={"62px"}>
                <TextField
                  type="email"
                  variant="outlined"
                  defaultValue="priyanshum.jainrehli@gmail.com"
                  label="Email"
                ></TextField>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Button size="small" startIcon={<SendIcon />}>
          hello
        </Button>
        <FormControl variant="standard" sx={{ width: 200 }}>
          <InputLabel>Courses</InputLabel>
          <Select label="Age">
            <MenuItem>Btech</MenuItem>
            <MenuItem>Bsc</MenuItem>
            <MenuItem>Bpharma</MenuItem>
            <MenuItem>Bcom</MenuItem>
          </Select>
        </FormControl>
        <IconButton size="large">
          <AccountCircleIcon />
        </IconButton>
      </center>
    </>
  );
}
