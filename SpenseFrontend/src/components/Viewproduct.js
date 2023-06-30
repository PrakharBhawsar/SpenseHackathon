import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { Divider } from "@mui/material";
import Muinavbar from "./Muinavbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Viewproduct = ({ cartDataLength, setCartDataLength }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://hackathonecommerce.cyclic.app/getproduct/${id}`)
        .then((res) => {
          const { data } = res.data;
          setData([data]);
        });
    };
    getData();
  }, [id]);
  // localStorage.removeItem('cartdata');
  const cd = JSON.parse(localStorage.getItem("cartdata"));
  console.log(cd);

  const handleAddToCart = (item) => {
    const checkLogin = localStorage.getItem("LoginUser");
    if (!checkLogin) {
      alert("Login to Continue");
    } else {
      let cartData = JSON.parse(localStorage.getItem("cartdata"));
      if (!Array.isArray(cartData)) {
        console.log("Invalid cart data in localStorage!");
        cartData = []; // Initialize cartData as an empty array
      }

      const {
        ProductName,
        ProductMRP,
        ProductPrice,
        ProductMainImgUrl,
        _id,
      } = item;

      if (cartData.find((data) => data._id === _id)) {
        toast.info("Item already exists in cart!", { autoClose: 5000 });
        alert("Item already exists in cart!");
      } else {
        const newdata = {
          ProductName,
          ProductMRP,
          ProductPrice,
          ProductMainImgUrl,
          _id,
        };
        cartData.push(newdata);
        localStorage.setItem("cartdata", JSON.stringify(cartData));
        toast.success("Item added into cart!", { autoClose: 5000 });
        alert("Item added into cart!");
        getlen();
      }
    }
  };
  const getlen = () => {
    const cartData = JSON.parse(localStorage.getItem("cartdata"));
    const length = cartData ? cartData.length : 0;
    setCartDataLength(length);
  };
  const handleBuyNow = (item) => {
    const checkLogin = localStorage.getItem("LoginUser");
    if (!checkLogin) {
      alert("Login to Continue");
    } else {
      let cartData = JSON.parse(localStorage.getItem("cartdata"));
      if (!Array.isArray(cartData)) {
        console.log("Invalid cart data in localStorage!");
        cartData = []; // Initialize cartData as an empty array
      }

      const {
        ProductName,
        ProductMRP,
        ProductPrice,
        ProductMainImgUrl,
        _id,
      } = item;

      if (cartData.find((data) => data._id === _id)) {
        navigate("/payment");
      } else {
        const newdata = {
          ProductName,
          ProductMRP,
          ProductPrice,
          ProductMainImgUrl,
          _id,
        };
        cartData.push(newdata);
        localStorage.setItem("cartdata", JSON.stringify(cartData));
        navigate("/payment");
      }
    }
  };
  return (
    <>
      <Muinavbar cartDataLength={cartDataLength} />
      <center>
        {Data.map((item) => {
          return (
            <Box
              key={item._id}
              sx={{
                bgcolor: "#f9f7f3",
                marginTop: 10,
                width: "90%",
                height: "fit-content",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "23%",
                  height: 500,
                  marginTop: 2,
                  textAlign: "center",
                  position: "fixed",
                }}
              >
                <img
                  src={item.ProductMainImgUrl}
                  width={300}
                  height={400}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  ml: 50,
                  textAlign: "left",
                }}
              >
                <Box sx={{ width: "80%", height: "fit-content", marginTop: 2 }}>
                  <Typography variant="h5">{item.ProductName}</Typography>
                  <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
                    <Typography variant="body1" color="green">
                      Special price
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      variant="h4"
                      color="black"
                      sx={{ marginRight: "1rem" }}
                    >
                      ₹{item.ProductPrice}
                    </Typography>
                    <Box
                      sx={{
                        marginRight: "20px",
                        justifyContent: "centre",
                        marginTop: "20px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ textDecoration: "line-through" }}
                      >
                        ₹{item.ProductMRP}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        justifyContent: "center",
                        marginRight: "15px",
                        marginTop: "20px",
                      }}
                    >
                      <Typography variant="body1" color="green">
                        82% off
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        bgcolor: "#4c9a2a",
                        width: "fit-content",
                        height: "fit-content",
                        borderRadius: "5px",
                        textAlign: "center",
                        display: "flex",
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="white"
                        sx={{ alignItems: "center", marginLeft: "3px" }}
                      >
                        4.2
                      </Typography>
                      <GradeIcon
                        sx={{
                          alignItems: "center",
                          color: "white",
                          fontSize: "15px",
                          marginTop: "3px",
                        }}
                      ></GradeIcon>
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        color="grey"
                        sx={{ marginLeft: "1rem" }}
                      >
                        1,47,841 Ratings & 10,219 Reviews
                      </Typography>
                    </Box>
                  </Box>
                  <br />
                  <Divider />
                  <Box sx={{ height: 130 }}>
                    <Typography variant="h5">Offers</Typography>
                    <Box sx={{}}>
                      <Box sx={{ display: "flex", height: 30, mt: 2, mb: 2 }}>
                        <Typography variant="subtitle2">
                          <LocalOfferIcon
                            sx={{
                              color: "#bb4430",
                              fontSize: "14px",
                            }}
                          ></LocalOfferIcon>
                          10% off on ICICI Bank Credit Card EMI Transactions, up
                          to ₹1500, on orders of ₹10,000 and above
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", height: 30 }}>
                        <Typography variant="subtitle2">
                          <LocalOfferIcon
                            sx={{
                              color: "#bb4430",
                              fontSize: "14px",
                            }}
                          ></LocalOfferIcon>
                          Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on
                          orders priced between ₹15,000 to ₹39,999
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <br />
                  <Divider />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: 100,
                        height: 90,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">
                        <LocalShippingIcon
                          sx={{
                            color: "#bb4430",
                            fontSize: "40px",
                            ml: 4,
                          }}
                        ></LocalShippingIcon>
                        <br />
                        Free Delivery
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 120,
                        height: 90,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">
                        <GppGoodIcon
                          sx={{
                            color: "#bb4430",
                            fontSize: "40px",
                            ml: 4,
                          }}
                        ></GppGoodIcon>
                        <br />
                        Warranty Policy
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 150,
                        height: 90,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" textAlign={"center"}>
                        <GppGoodIcon
                          sx={{
                            color: "#bb4430",
                            fontSize: "40px",
                          }}
                        />
                        <br />7 days replacement
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 100,
                        height: 80,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" textAlign={"center"}>
                        <GppGoodIcon
                          sx={{
                            color: "#bb4430",
                            fontSize: "40px",
                          }}
                        />
                        <br />
                        Amazing Deals
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Highlights
                    </Typography>
                    <Typography variant="body2">
                      {item.ProductLongDesc}
                    </Typography>
                  </Box>
                  <br />
                  <Divider />
                  <Box>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Box Content
                    </Typography>
                    <Typography variant="body2">
                      {item.ProductShortDesc}
                    </Typography>
                  </Box>
                  <br />
                  <Divider />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ mt: 1, display: "flex", flexDirection: "row" }}
                    >
                      Category :
                      <Typography
                        variant="body1"
                        sx={{ display: "flex", alignItems: "center", ml: 3 }}
                      >
                        {item.ProductCategory}
                      </Typography>
                    </Typography>
                  </Box>
                  <br />
                  <Divider />
                </Box>
                <Box
                  sx={{
                    height: 400,
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: 200,
                      height: 60,
                      m: 3,
                      mt: 10,
                      bgcolor: "#bb4430",
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleBuyNow(item)}
                    sx={{
                      width: 200,
                      height: 60,
                      m: 3,
                      mt: 0,
                      bgcolor: "#bb4430",
                    }}
                  >
                    BUY NOW
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </center>
    </>
  );
};

export default Viewproduct;
