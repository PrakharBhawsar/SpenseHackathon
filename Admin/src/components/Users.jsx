import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//icons
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
import Header from "./Header";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
export default function Users() {
  const getData = async () => {
    await axios
      .get("https://hackathonecommerce.cyclic.app/getallproduct/Admin")
      .then((res) => {
        const { data } = res.data;
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const checklogin = localStorage.getItem('login');

  if(!checklogin){
    navigate('/');
  }
  const handlerequest = async (id, Statusmsg) => {
    await axios
      .post("https://hackathonecommerce.cyclic.app/ProductUpdateStatus", {
        id,
        Statusmsg,
      })
      .then((res) => {
        alert(res.data.message);
        getData();
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const [Data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [deleteitem, setdeleteitem] = useState("");
  let i = 0;
  // ---delete Code----
  const handleclose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    setOpen(true);
    setdeleteitem(id);
  };
  const confirmDelete = async (id) => {
    await axios
      .delete(`https://hackathonecommerce.cyclic.app/deleteProduct/${id}`)
      .then((res) => {
        alert(res.data.message);
        getData();
        setOpen(false);
      })
      .catch((err) => {
        setOpen(false);
      });
  };

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          marginLeft: "300px",
          flexGrow: 1,
          p: 3,
          bgcolor: "#F5F5F5",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Typography
          variant="h4"
          sx={{ fontSize: "20px", color: "#6945FF", textAlign: "center" }}
        >
          Product Management
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* // first Row */}
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={16}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Add Product
                </TableCell>
              </TableRow>
            </TableHead>

            {/* // Thrid row */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  MRP
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Img Url
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Short Desc.
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Long Desc.
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Sub Category
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Color
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Size
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Accept
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Reject
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>

            {Data.toReversed().map((user) => {
              i = i + 1;
              return (
                <TableBody key={user._id}>
                  <TableRow>
                    <TableCell align="center" sx={{ width: "150px" }}>
                      {i}
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "180px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.ProductName}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{user.ProductMRP}</TableCell>
                    <TableCell align="center">{user.ProductPrice}</TableCell>
                    <TableCell align="center">
                      <img
                        src={user.ProductMainImgUrl}
                        alt={user.ProductName}
                        width="50px"
                      />
                    </TableCell>
                    <TableCell align="center" sx={{ width: "50px" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.ProductShortDesc}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.ProductLongDesc}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{user.ProductCategory}</TableCell>
                    <TableCell align="center">
                      {user.ProductSubCategory}
                    </TableCell>
                    <TableCell align="center">{user.ProductColor}</TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {user.ProductSize}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{user.ProductQuantity}</TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          backgroundColor:
                                user.Status === "Accepted"
                              ? "green"
                              : user.Status === "Rejected"
                              ? "red"
                              : user.Status === "Pending"
                              ? "orange"
                              : "white",
                          color: "white",
                          p: 1,
                        }}
                      >
                        {user.Status}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <CheckIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handlerequest(user._id, "Accepted")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ClearIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handlerequest(user._id, "Rejected")}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        sx={{ cursor: "pointer" }}
                        className="DeleteIcon"
                        onClick={() => handleDelete(user._id)}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>

        <Dialog
          open={open}
          onClose={handleclose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your will not be able to recover this imaginary file!
            </DialogContentText>

            <DialogActions>
              <Button onClick={() => setOpen(false)}>cancle</Button>
              <Button onClick={() => confirmDelete(deleteitem)}>
                Yes, delete it!
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
}
