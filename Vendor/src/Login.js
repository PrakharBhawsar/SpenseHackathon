import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
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

export default function Login() {
  const [Data,setData] = useState({
    VendorUsername:"",
    VendorPassword:"",
})
const navigate = useNavigate();
const handleChange=(e)=>{
    const {name,value } = e.target;
    setData({...Data,[name]:value});
}
const handleSubmit=async()=>{
    await axios.post("https://hackathonecommerce.cyclic.app/VendorLogin",Data)
    .then((res)=>{
      const {data} = res.data;
      alert(res.data.message);
      console.log(res.data);
      if(data !== null){
        localStorage.setItem('login',true);
        localStorage.setItem('vid',data._id);
        navigate('/Home');
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
            Vendor Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="VendorUsername"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="VendorPassword"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
            />
            
            <Button
              type="button"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>navigate("/Signup")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}