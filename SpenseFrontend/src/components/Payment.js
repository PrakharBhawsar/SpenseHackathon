import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Button,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Muinavbar from "./Muinavbar";
import { useNavigate } from "react-router";
export default function Address({ cartDataLength }) {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [cdl, setcdl] = useState(0);

  let ta = 0;
  Data.map((item) => {
    ta = ta + item.ProductPrice;
    return item;
  });
  let discount = 0;
  discount = ta - (ta * 10) / 100;

  const getData = async () => {
    const cartData = JSON.parse(localStorage.getItem("cartdata"));
    setData(cartData);
  };
  useEffect(() => {
    getData();
    const cartData = JSON.parse(localStorage.getItem("cartdata"));
    const cartDataLengt = cartData ? cartData.length : 0;
    setcdl(cartDataLengt);
  }, []);
  const handleClick = () =>{
    alert('Order Placed');
    localStorage.removeItem('cartdata');
    navigate('/')
  }
  return (
    <div className="address-field">
      {/* header */}
      <Muinavbar cartDataLength={cartDataLength} />
      <Box sx={{ display: "flex", alignItems: "row", mt: 10 }}>
        <Box sx={{ mt: 5, ml: 10, mb: 5, height: "fit-content", width: "63%" }}>
          <Paper
            elevation={3}
            component="form"
            sx={{
              bgcolor: "#fff",
              p: 3,
              width: "90%",
              height: "fit-content",
              border: "2px solid black",
              borderRadius: 3,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Your Addresses
            </Typography>
            <Divider></Divider>
            <FormControl sx={{ mt: 2 }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="address 1"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="address 1"
                  control={<Radio />}
                  label="Address 1: C-75/2, 3rd Stage, Peenya Industrial Estate, Bangalore"
                />
                <FormControlLabel
                  value="address 2"
                  control={<Radio />}
                  label="Address 2: 9 K B Dasan Road, Alwarpet, Chennai"
                />
                <FormControlLabel
                  value="address 3"
                  control={<Radio />}
                  label="Address 3: 230, Sec.17, Big Splash, Vashi, Navi Mumbai, Mumbai"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <Button variant="text" sx={{ mt: 1 }}>
              <AddIcon></AddIcon>Add Address
            </Button>
          </Paper>
          <Paper
            elevation={3}
            component="form"
            sx={{
              bgcolor: "#fff",
              p: 3,
              width: "90%",
              height: "fit-content",
              mt: 5,
              border: "2px solid black",
              borderRadius: 3,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Payment
            </Typography>
            <Divider></Divider>
            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Apply Coupon Code:
            </Typography>
            <TextField
              id="standard-basic"
              label="Coupon Code"
              variant="standard"
            />
            <Button
              sx={{
                ml: 2,
                mt: 2,
                height: 30,
                bgcolor: "#eeeeee",
                color: "black",
              }}
              variant="contained"
            >
              Apply
            </Button>
            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Payment Options:
            </Typography>
            <FormControl sx={{ mt: 2 }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="card"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Credit or Debit Card"
                />
                <FormControlLabel
                  value="netbanking"
                  control={<Radio />}
                  label="Net Banking"
                />
                <FormControlLabel
                  value="upi"
                  control={<Radio />}
                  label="Other Upi Apps"
                />
                <FormControlLabel value="emi" control={<Radio />} label="EMI" />
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Box>
        <Box sx={{ height: "fit-content", width: 300, mt: 5, ml: 3 }}>
          <Paper
            elevation={3}
            component="form"
            sx={{
              bgcolor: "#fff",
              p: 3,
              width: 250,
              height: "fit-content",
              border: "2px solid black",
              borderRadius: 3,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Order Summary
            </Typography>
            <Divider></Divider>
            <Box sx={{ display: "flex", alignItems: "row", mt: 2 }}>
              <Box sx={{ width: 500 }}>
                <Typography sx={{ mb: 1 }}>Total Items:</Typography>
                <Typography sx={{ mb: 1 }}>Total Price:</Typography>
                <Typography sx={{ mb: 1 }}>Discount:</Typography>
                <Typography sx={{ mb: 1 }}>Delivery Charges:</Typography>
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography sx={{ mb: 1 }}>
                  {cartDataLength !== 0 ? cartDataLength : cdl}
                </Typography>
                <Typography sx={{ mb: 1 }}>₹ {ta}</Typography>
                <Typography sx={{ mb: 1 }}>{"10%"}</Typography>
                <Typography sx={{ mb: 1 }}>{"00"}</Typography>
              </Box>
            </Box>
            <Divider sx={{ mt: 1 }}></Divider>
            <Box sx={{ display: "flex", alignItems: "row", mt: 2 }}>
              <Box sx={{ width: 500 }}>
                <Typography sx={{ mb: 1 }}>Order Total:</Typography>
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography sx={{ mb: 1 }}>₹ {discount.toFixed(0)}</Typography>
              </Box>    
            </Box>
            <Box sx={{ display: "flex", alignItems: "row", mt: 2 }}>
              <Box sx={{ width: 500 }}>
                <Button variant="contained" color="success" onClick={handleClick}>Place Order</Button>
              </Box>    
            </Box>  
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
