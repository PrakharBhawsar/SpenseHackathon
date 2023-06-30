import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [data,setdata] = useState({
    AdminUsername:"",
    AdminPassword:""
  });

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setdata({...data,[name]:value});
  }

  const handleSubmit = async () => {
    if (data.AdminUsername === "" || data.AdminPassword === "") {
      alert("Field is Empty");
    } else {
      await axios
        .post("https://hackathonecommerce.cyclic.app/AdminLogin", data)
        .then((res) => {
          alert(res.data.message);
          localStorage.setItem('login',true);
          navigate('/Home')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="AdminUsername"
              onChange={handleChange}
              value={data.AdminUsername}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="AdminPassword"
              onChange={handleChange}
              value={data.AdminPassword}
              id="password"
            />
            <Button
              type="button"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
