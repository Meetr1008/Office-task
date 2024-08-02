import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import {  Grid, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { openDeclineModel,closeDeclineModel } from "../../slice/model";
import { getYourData } from "../../slice/fetchDataSlice";
import {STATUS}  from '../../slice/fetchDataSlice'

//style of box model ------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: "650px",
  bgcolor: "background.paper",
  boxShadow: 24,
};


const  Decline = ({TransactionData}) => {

  
  const userData1 = useSelector((state) => state.userData.data);

 const declineBox = useSelector((state)=>state.models.declineModelValue)
 const dispatch = useDispatch() 

  const chip= TransactionData.map(e=>{
    return e.map(item=>{
      return item.TransactionDate;
    })
  })

// set api data in state ----

//   const [userData, setUserData] = useState([]);
//  //fetch api -------

//   const fetchData = async () => {
//     const res = await axios.get("http://localhost:3033/users");

//     setUserData(res.data);
//   };

//    console.log("userdata outr>>>", userData1);

//   useEffect(() => {
//     fetchData();

//   }, []);

    useEffect(() => {
      dispatch(getYourData());
    }, []);


  
  return (
    <>
      <Typography onClick={() => dispatch(openDeclineModel())} style={{ float: "right" }}>
        Filter by status: Declined
        <Chip
          label={chip.map((e) => e.length)}
          style={{ marginLeft: "20px", backgroundColor: "#00B1B0" }}
        ></Chip>
      </Typography>
      <Modal
        open={declineBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              width: "1200px",
              height: "60px",
              borderRadius: "10px 10px 1px 0px",
              borderColor: "#C2C2C2",
              backgroundColor: "#EFEEEE",
            }}
            id="modal-modal-title"
            component="h2"
          ></Typography>
          <Grid container spacing={0} sx={{ marginTop: "30px" }}>
            <Grid item xs={6}>
              <Paper style={{ height: "200px", boxShadow: "none" }}>
                <TableContainer sx={{ width: "420px" }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {userData1.map((user, index) => (
                        <React.Fragment key={index}>
                          {user.ProfileStatus.map((profile, tIndex) => {
                            const rows = [
                              {
                                name: "Account Code",
                                value: profile.AccountCode,
                              },
                              {
                                name: "Customer ID",
                                value: profile.CustomerID,
                              },
                              {
                                name: "Corporate Account Code",
                                value: profile.CorporateAccountCode,
                              },
                              {
                                name: "Cardholder Name",
                                value: profile.CardholderName,
                              },
                              {
                                name: "Cardholder Card Number",
                                value: profile.CardholderCardNumber,
                              },
                              {
                                name: "Card Expiration Date",
                                value: profile.CardExpirationDate,
                              },
                              {
                                name: "Authorized Amount",
                                value: profile.AuthorizedAmount,
                              },
                              {
                                name: "Local Date (CST)",
                                value: profile.LocalDate,
                              },
                              {
                                name: "Local Time (CST)",
                                value: profile.LocalTime,
                              },
                              { name: "Prompted ID", value: "" },
                              {
                                name: "Employee Name",
                                value: profile.EmployeeName,
                              },
                            ];

                            return (
                              <TableRow key={`${index}-${tIndex}`}>
                                {rows.map((row, rIndex) => (
                                  <TableRow key={rIndex}>
                                    <TableCell
                                      sx={{
                                        fontFamily: "Poppins",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        border: "none",
                                        padding: "9px",
                                      }}
                                      component="th"
                                      scope="row"
                                      align="right"
                                    >
                                      {row.name}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        border: "none",
                                        padding: "0px",
                                        fontFamily: "Poppins",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        color: "#0069BF",
                                      }}
                                    >
                                      {row.value}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableRow>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ height: "480px", boxShadow: "none" }}>
                <TableContainer sx={{ width: "500px" }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {userData1.map((user, index) => (
                        <React.Fragment key={index}>
                          {user.ProfileStatus.map((profile, pIndex) => {
                            const rows = [
                              {
                                name: "Reversal Flag",
                                value: profile.ReversalFlag,
                              },
                              {
                                name: "Accept location:",
                                value: profile.Acceptlocation,
                              },
                              {
                                name: "Merchant Category Code Group",
                                value: profile.MerchantGroup,
                              },
                              {
                                name: "Merchant Category Code Number",
                                value: profile.MerchantNumber,
                              },
                              {
                                name: "Merchant Category Code Description",
                                value: profile.MerchantDes,
                              },
                              {
                                name: "POS Entry Mode",
                                value: profile.PosEntryMode,
                              },
                              {
                                name: "POS Entry Mode Description:",
                                value: profile.PosEntryDes,
                              },
                              {
                                name: "Decline Code:",
                                value: profile.DeclinedCode,
                              },
                              {
                                name: "Decline Message Description:",
                                value: profile.Declinedmsg,
                              },
                              {
                                name: "Corrective Action:",
                                value: profile.CorrectiveAction,
                              },
                              { name: "Accept ID:", value: profile.AcceptID },
                            ];

                            return (
                              <TableRow key={`${index}-${pIndex}`}>
                                {rows.map((row, rIndex) => (
                                  <TableRow key={rIndex}>
                                    <TableCell
                                      sx={{
                                        fontFamily: "Poppins",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        border: "none",
                                        padding: "9px",
                                      }}
                                      component="th"
                                      scope="row"
                                      align="right"
                                    >
                                      {row.name}
                                    </TableCell>
                                    <TableCell
                                      sx={{
                                        border: "none",
                                        padding: "0px",
                                        fontFamily: "Poppins",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        color: "black",
                                      }}
                                    >
                                      {row.value}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableRow>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
          <Typography>
            <Button
              onClick={() => dispatch(closeDeclineModel())}
              sx={{
                float: "right",
                marginRight: "50px",
                marginTop: "10px",
                backgroundColor: "#507087",
                color: "white",
                width: "72px",
                height: "42px",
                "&:hover": { backgroundColor: "#507087" },
              }}
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export { Decline };
