import React, { useState } from "react";
import Muinavbar from "./Muinavbar";
import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
export default function Filter({ cartDataLength }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://hackathonecommerce.cyclic.app/getallproduct")
      .then((res) => {
        const { data } = res.data;
        setData(data);
      });
  };
  const filteredProducts =
  id === "All"
    ? Data
    : Data.filter(
        (product) =>
          product.ProductCategory.toLowerCase() === id.toLowerCase() ||
          product.ProductName.toLowerCase().includes(id.toLowerCase())
      );
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Muinavbar cartDataLength={cartDataLength} />
      <center>
        <Box
          sx={{
            backgroundColor: "#f9f7f3",
            width: "100%",
            height: "auto",
            mt: 9,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              minHeight: "670px",
              height: "fit-content",
              bgcolor: "white",
            }}
          >
            <Typography
              variant="h5"
              width={"90%"}
              textAlign={"left"}
              marginTop={1}
            >
              Results for {id}
            </Typography>
            <Typography variant="subtitle1" width={"90%"} textAlign={"left"}>
              Showing all similar products
            </Typography>
            <Divider />
            <Box
              sx={{
                width: "90%",
                height: "90%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {filteredProducts.length !== 0 ? (
                filteredProducts.map((item) => {
                  return (
                    <div className="card" key={item._id}>
                      <img
                        src={item.ProductMainImgUrl}
                        alt={item.ProductName}
                        style={{ width: 190, height: 150 }}
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
        </Box>
      </center>
    </>
  );
}
