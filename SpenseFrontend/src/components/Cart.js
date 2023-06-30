import React, { useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Muinavbar from "./Muinavbar";
import { useNavigate } from "react-router";
const mycomponent = {
  height: "auto",
  maxHeight:'300px',
  overflowY: "scroll",
};

const Cart = ({ cartDataLength }) => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
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
  React.useEffect(() => {
    getData();
  }, []);

  
  const handleCartremove = (id) => {
    const indexToRemove = Data.findIndex((item) => item._id === id);

    if (indexToRemove !== -1) {
      Data.splice(indexToRemove, 1);
    }
    localStorage.setItem("cartdata", JSON.stringify(Data));
    getData();
  };
  return (
    <>
      <Muinavbar cartDataLength={cartDataLength} />

      <center>
        <Box
          sx={{
            width: "96%",
            height: 450,
            mt: 13,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* price detail */}
          <Box
            sx={{ width: "30%", height: 350, backgroundColor: "white", pt: 1 }}
          >
            <Typography variant="h5" color="grey">
              Price Details
            </Typography>
            <Divider />
            <Box sx={{ width: "90%", height: 250, mt: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" textAlign={"left"} mt={3}>
                Price ({Data.length} Items)
              </Typography>
              <Typography variant="body1" textAlign={"left"} mt={3}>
              ₹ {ta}
              </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" textAlign={"left"} mt={3}>
                Discount
              </Typography>
              <Typography variant="body1" textAlign={"left"} mt={3}>
                {'10%'}
              </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" textAlign={"left"} mt={3}>
                Delivery Charges
              </Typography>              
              <Typography variant="body1" textAlign={"left"} mt={3}>
              {'00'}
              </Typography>
              </Box>
              <br />
              <br />
              <Divider />
              <br />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" textAlign={"left"}>
                  Total Amount:
                </Typography>
                <Typography variant="h5" textAlign={"left"}>
                ₹ {discount.toFixed(0)}
                </Typography>
              </Box>
              <br />
              <Divider />
            </Box>
          </Box>

          {/* cart items */}
          <Box sx={{ width: "68%", height: 450, backgroundColor: "white" }}>
            <br />
            <Typography variant="h5">Shopping Items</Typography>
            <br />
            <Divider />
            <Box sx={{ width: "65.3", height: 300 }}>
              <Box sx={mycomponent}>
                {Data.map((item) => {
                  return (
                    <Box
                      key={item._id}
                      sx={{
                        height: 220,
                        width: "95%",
                        mt: 1,
                        mb: 1,
                        border: "1px solid grey",
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "90%",
                          height: 180,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          width={"20%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <img
                            src={item.ProductMainImgUrl}
                            width={100}
                            height={120}
                            alt=""
                          />
                        </Box>
                        <Box width={"80%"} height={"90%"} textAlign={"left"}>
                          <Typography variant="h6" sx={{ width: "60%", mt: 2, height:70,overflow:'hidden' }}>
                            {item.ProductName}
                          </Typography>
                          <Typography variant="h6" sx={{ width: "60%", mt: 3 }}>
                            ₹{item.ProductPrice} &nbsp;
                            <span className="cut-price">
                              ₹{item.ProductMRP}
                            </span>
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "right",
                          }}
                        >
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleCartremove(item._id)}
                          >
                            <DeleteIcon sx={{ mr: 1 }} />
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              position={"fixed"}
              sx={{
                width: "65.3%",
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                mt:2
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#f3dfa3", color: "black", mr: 5 }}
                onClick={()=>navigate('/payment')}
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Box>
      </center>
    </>
  );
};
export default Cart;
