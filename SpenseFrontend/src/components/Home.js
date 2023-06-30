import React from "react";
import Muinavbar from "./Muinavbar";
import { Box, Button, Divider, Typography } from "@mui/material";
// import img1 from "../images/image1.webp";
// import img2 from "../images/image2.webp";
// import img3 from "../images/image3.webp";
// import img4 from "../images/image4.webp";
// import img5 from "../images/image5.webp";
import Slider from "./Slider";
// import { useNavigate } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
const mycomponent = {
  height: "370px",
  overflowY: "scroll",
};

export default function Home({cartDataLength}) {
  const navigate = useNavigate();
  const [Data, setData] = React.useState([]);
  const getData = async () => {
    await axios
      .get("https://hackathonecommerce.cyclic.app/getallproduct")
      .then((res) => {
          const {data} = res.data;
          setData(data);
          console.log(data);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Muinavbar cartDataLength={cartDataLength}/>
      <center>
        <Box
          sx={{
            height: 450,
            width: "95%",
            display: "flex",
            flexDirection: "row",
            mt: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "30%",
              height: 400,
              borderRadius: 3,
              pt: 1,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h5">Top Deals</Typography>
            <Divider />
            <Box sx={mycomponent}>
              {Data.slice(0, 5).map((item) => {
                return (
                  <Box
                    key={item._id}
                    sx={{
                      height: "fit-content",
                      width: "90%",
                      mt: 2,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      cursor:'pointer'
                    }}
                    onClick={()=>navigate(`/viewproduct/${item._id}`)}
                  >
                    <img src={item.ProductMainImgUrl} width="60px" height='80px' alt="" />
                    <Box
                      sx={{
                        width: '70%',
                        height: 'fit-content',
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"space-evenly",
                        justifyItems: "left",
                        textAlign: "left",
                      }}
                    >
                      <Typography variant="body1" sx={{ textAlign: "left" }}>
                        {item.ProductBrand}
                      </Typography>
                      <Typography variant="body2">
                        {item.ProductName}
                      </Typography>
                      <Typography variant="body2">₹{item.ProductPrice}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ width: "68%", height: 400, backgroundColor: "white" }}>
            <Slider />
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: 300,
            backgroundColor: "white",
            borderRadius: 2,
            pt: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Flash Deals
            <Button size="small" color="secondary">
              See More
            </Button>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "left", width: "93%" }}
          >
            Upto 60% Off
          </Typography>
          <Divider />
          <Box
              sx={{
                width: "100%",
                height: "70%",
                display: "flex",
                flexDirection: "row",
                justifyContent:'center',
                alignItems:'center',
                flexWrap: "wrap",
              }}
            >
          {Data.length !== 0 ? (
                Data.slice(4,8).map((item) => {
                  return (
                    <div className="card-flash" key={item._id}>
                      <img
                        src={item.ProductMainImgUrl}
                        alt={item.ProductName}
                        style={{ width: 100, height: 100 }}
                      />
                      <h1
                        style={{
                          fontSize: "1rem",
                          height: 70,
                          overflow: "hidden",
                        }}
                      >
                        {item.ProductName}
                      </h1>
                      <p className="price">₹ {item.ProductPrice}</p>
                      <p style={{ height: 55, overflow: "hidden" }}>
                        {item.ProductShortDesc}
                      </p>
                      <p>
                        <button
                          onClick={() => navigate(`/viewproduct/${item._id}`)}
                        >
                          View Product
                        </button>
                      </p>
                    </div>
                  );
                })
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <h2 style={{ textAlign: "center" }}>No Product Found</h2>
                </Box>
              )}
              </Box>
        </Box>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Box
          sx={{
            width: "95%",
            height: 350,
            borderRadius: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "49%",
              height: 300,
              backgroundColor: "white",
              borderRadius: 2,
              pt: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "90%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Appliances for your home
              <Button size="small" color="secondary">
                See More
              </Button>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", width: "85%" }}
            >
              Include Offers
            </Typography>
            <Divider />
          </Box>
          <Box
            sx={{
              width: "49%",
              height: 300,
              backgroundColor: "white",
              borderRadius: 2,
              pt: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "90%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Electronics
              <Button size="small" color="secondary">
                See More
              </Button>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", width: "85%" }}
            >
              For you
            </Typography>
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: 300,
            backgroundColor: "white",
            borderRadius: 2,
            pt: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Fashion Deals
            <Button size="small" color="secondary">
              See More
            </Button>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "left", width: "93%" }}
          >
            Upto 40% Off
          </Typography>
          <Divider />
        </Box>
        <Box
          sx={{
            height: "fit-content",
            width: "95%",
            mt: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ height: 400, width: 290, backgroundColor: "white", pt: 2 }}
          >
            <Typography variant="h6">Watches</Typography>
            <Divider />
          </Box>
          <Box
            sx={{ height: 400, width: 290, backgroundColor: "white", pt: 2 }}
          >
            <Typography variant="h6">Beauty Products</Typography>
            <Divider />
          </Box>
          <Box
            sx={{ height: 400, width: 290, backgroundColor: "white", pt: 2 }}
          >
            <Typography variant="h6">Everyday Essentials</Typography>
            <Divider />
          </Box>
          <Box
            sx={{ height: 400, width: 290, backgroundColor: "white", pt: 2 }}
          >
            <Typography variant="h6">Sports & Healthcare</Typography>
            <Divider />
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: 300,
            backgroundColor: "white",
            borderRadius: 2,
            pt: 2,
            mt: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Suggested for you
            <Button size="small" color="secondary">
              See More
            </Button>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "left", width: "93%" }}
          >
            Based on your interest
          </Typography>
          <Divider />
        </Box>
      </center>
    </>
  );
}
