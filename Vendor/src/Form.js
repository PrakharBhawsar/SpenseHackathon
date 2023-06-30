import React from "react";
import Header from "./Header";
import { useState } from "react";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { Typography } from "@mui/material";
import axios from "axios";

export default function Form() {
  const vid = localStorage.getItem('vid');
  const [product, addproduct] = useState({
    ProductName: "",
    ProductMRP: "",
    ProductPrice: "",
    ProductMainImgUrl: "",
    ProductShortDesc: "",
    ProductLongDesc: "",
    ProductColor: "",
    ProductImgs: [
      {
        Img1: "",
        Img2: "",
        Img3: "",
      },
    ],
    ProductCategory: "",
    ProductSubCategory: "",
    ProductBrand: "",
    ProductSize: "",
    ProductPriceTag: "",
    ProductQuantity: "",
    VendorId: vid,
  });
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    addproduct({
      ...product,
      ProductImgs: { ...product.ProductImgs, [name]: value },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    addproduct({ ...product, [name]: value });
  };

  const handleSubmit = async () => {
    await axios
      .post("https://hackathonecommerce.cyclic.app/AddProduct", product)
      .then((res) => {
        alert(res.data.message);
        addproduct({
          ProductName: "",
          ProductMRP: "",
          ProductPrice: "",
          ProductMainImgUrl: "",
          ProductShortDesc: "",
          ProductLongDesc: "",
          ProductColor: "",
          ProductImgs: [
            {
              Img1: "",
              Img2: "",
              Img3: "",
            },
          ],
          ProductCategory: "",
          ProductSubCategory: "",
          ProductBrand: "",
          ProductSize: "",
          ProductPriceTag: "",
          ProductQuantity: "",
          VendorId: vid,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div className="main">
      <Header />
      <div className="form-field">
        <Typography
          variant="h5"
          sx={{ width: "100%", mb: 4, display: "flex", alignItems: "center" }}
        >
          <AddCircleOutlineTwoToneIcon
            sx={{ color: "#6945ff", mr: 1 }}
          ></AddCircleOutlineTwoToneIcon>{" "}
          Add a Product:
        </Typography>
        <form>
          <div className="input-field">
            <label className="label-text">Product Name:</label>
            <br />
            <input
              type="text"
              value={product.ProductName}
              name="ProductName"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product MRP:</label>
            <br />
            <input
              type="tel"
              value={product.ProductMRP}
              name="ProductMRP"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Price:</label>
            <br />
            <input
              type="tel"
              value={product.ProductPrice}
              name="ProductPrice"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Short Description:</label>
            <br />
            <input
              type="text"
              value={product.ProductShortDesc}
              name="ProductShortDesc"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Long Description:</label>
            <br />
            <input
              type="text"
              value={product.ProductLongDesc}
              name="ProductLongDesc"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Main Image URL:</label>
            <br />
            <input
              type="text"
              value={product.ProductMainImgUrl}
              name="ProductMainImgUrl"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Other Images:</label>
            <br />
            <br />
            <label>Image 1: </label>
            <br />
            <input
              type="text"
              value={product.ProductImgs.Img1}
              name="Img1"
              onChange={handleChange1}
              className="input-box"
            ></input>
            <br />
            <label>Image 2: </label>
            <br />
            <input
              type="text"
              value={product.ProductImgs.Img2}
              name="Img2"
              onChange={handleChange1}
              className="input-box"
            ></input>
            <br />
            <label>Image 3: </label>
            <br />
            <input
              type="text"
              value={product.ProductImgs.Img3}
              name="Img3"
              onChange={handleChange1}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Category:</label>
            <br />
            <input
              type="text"
              value={product.ProductCategory}
              name="ProductCategory"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Sub Category:</label>
            <br />
            <input
              type="text"
              value={product.ProductSubCategory}
              name="ProductSubCategory"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Brand:</label>
            <br />
            <input
              type="text"
              value={product.ProductBrand}
              name="ProductBrand"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Color:</label>
            <br />
            <input
              type="text"
              value={product.ProductColor}
              name="ProductColor"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Price Tag:</label>
            <br />
            <input
              type="text"
              value={product.ProductPriceTag}
              name="ProductPriceTag"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Size:</label>
            <br />
            <input
              type="text"
              value={product.ProductSize}
              name="ProductSize"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <label className="label-text">Product Quantity:</label>
            <br />
            <input
              type="text"
              value={product.ProductQuantity}
              name="ProductQuantity"
              onChange={handleChange}
              className="input-box"
            ></input>
          </div>
          <div className="input-field">
            <input
              type="button"
              value="Add Product"
              onClick={handleSubmit}
              className="register-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
