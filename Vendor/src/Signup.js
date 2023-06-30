import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const defaultTheme = createTheme();

export default function Signup() {
  const navigate = useNavigate();
    const [Data,setData] = useState({
        VendorFirstName:"",
        VendorLastName:"",
        VendorUsername:"",
        VendorPassword:"",
    })
    const handleChange=(e)=>{
        const {name,value } = e.target;
        setData({...Data,[name]:value});
    }
    const handleSubmit=async()=>{
        await axios.post("https://hackathonecommerce.cyclic.app/VendorRegister",Data)
        .then((res)=>{
          const {data} = res.data;
          alert(res.data.message);
          if(data !== null){
            localStorage.setItem('login',true);
            localStorage.setItem('vid',data._id);
            navigate('/Home')
          }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Vendor Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="VendorFirstName"
                  required
                  onChange={handleChange}
                  fullWidth
                  value={Data.VendorFirstName}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="VendorLastName"
                  value={Data.VendorLastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="VendorUsername"
                  onChange={handleChange}
                  value={Data.VendorUsername}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="VendorPassword"
                  value={Data.VendorPassword}
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={()=> navigate('/')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}