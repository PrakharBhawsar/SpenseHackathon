import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Box, Paper, Typography, ButtonGroup, Button } from "@mui/material";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Inventory({setProductData}) {
  const navigate = useNavigate();
  const vid = localStorage.getItem("vid");
  const [data, setdata] = useState([]);
  const getData = async () => {
    await axios
      .get(`https://hackathonecommerce.cyclic.app/getallproduct/Vendor/${vid}`)
      .then((res) => {
        const { data } = res.data;
        setdata(data);
      });
  };

  const handleDelete = async(id)=>{
    await axios.delete(`https://hackathonecommerce.cyclic.app/deleteProduct/${id}`)
    .then((res)=>{
      alert(res.data.message);
      getData();
    })
    .catch((err)=>{
      console.log('error');
    })
  }

  useEffect(() => {
    getData();
  }, [vid]);
  
  const handleEdit = (item)=>{
    setProductData(item);
    navigate('/EditProduct');
  }
  return (
    <div className="main">
      <Header />
      <div className="inventory-field">
        <Box
          sx={{
            bgcolor: "#eeeeee",
            width: "100%",
            height: "94dvh",
            p: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ width: "100%", mb: 2, display: "flex", alignItems: "center" }}
          >
            <InventoryTwoToneIcon
              sx={{ color: "#6945ff", mr: 1 }}
            ></InventoryTwoToneIcon>
            Inventory
          </Typography>
          {data.map((item) => {
            return (
              <Paper
                key={item._id}
                elevation={3}
                sx={{ marginBottom: 2, height: 320 }}
              >
                <Box
                  component="div"
                  sx={{
                    bgcolor: "#fff",
                    p: 3,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Box sx={{ width: "10%" }}>
                    <img
                      src={item.ProductMainImgUrl}
                      alt={item.ProductName}
                      width={100}
                    ></img>
                  </Box>

                  <Box sx={{ width: "80%", height: 150 }}>
                    <Box>Product Name: {item.ProductName}</Box>
                    <br></br>
                    <Box sx={{ height: 40 }}>
                      Product Price: {item.ProductPrice}
                    </Box>
                    <Box sx={{ height: 40, width: "80%" }}>
                      Product Description:
                      {item.ProductShortDesc.length > 150
                        ? "Not Displyable"
                        : item.ProductShortDesc}
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mr: 2,
                  }}
                >
                  <ButtonGroup>
                    <Button onClick={()=>handleEdit(item)}>Edit</Button>
                    <Button color="error" variant="outlined" va="true" onClick={()=>handleDelete(item._id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </div>
    </div>
  );
}
