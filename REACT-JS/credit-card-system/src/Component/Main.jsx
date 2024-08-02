import React from "react";
import { Grid, Paper, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import axios from "axios";
import { useState, useEffect } from "react";
import tableCellClasses from "@mui/material/TableCell";
import { Replace } from "./Models/Replace";
import { Profile } from "./Models/Profile";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getYourData } from "../slice/fetchDataSlice";
import {STATUS} from "../slice/fetchDataSlice"
import { useSelector ,useDispatch } from "react-redux";

const items = [
  "Mail To:",
  "Address Line 1",
  "Address Line 2",
  "Country",
  "State / Province",
  "City / Territory:",
  "Zip / Postal Code",
];

const Main = () => {

 const dispatch = useDispatch()

  const [SpendingProfile, setSpendingProfile] = useState("");

   const userData1 = useSelector((state) => state.userData.data);

   useEffect(() => {
     dispatch(getYourData());
   }, []);
 

  //spendinng money vallue ------

  const spendingMoney = userData1.map((e) => e.SpendingMoney);
  console.log(spendingMoney);

  //get fraud card value from the sevrer ----
  const ReasonVal = userData1.map((e)=>e.shippingData1)

  const newReasonVal = ReasonVal.map(e=>{
    return e.reason
  })

  console.log("your reson value is =>>>>", newReasonVal)
  //get lost card value from the sever ------

  // const lostVal = userData.map((e) => e.Lost);

  // convert those value into the string -----


  const newReasonValue = newReasonVal.toString()


  //   const FraudNewVal = FraudVal.toString();

  // style table cell in table

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "12px",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //fetch data from the server -----

 

  // create data of table

  const createData = (name, calories) => {
    return { name, calories };
  };

  return (
    <Grid container spacing={1}>
      {userData1.map((users, index) => {
        const rows = [
          createData("Travel level:", users.TravelLevel),
          createData("ID:", users.ID),
          createData("Profile:", users.Profile),
          createData("Summary:", users.Summary),
          createData("Birth Date:", users.BirthDate),
          createData("Address:", users.Address),
          createData("Manager:", users.Manager),
        ];

        return (
          <Grid
            item
            xs={12}
            sm={7}
            md={5}
            lg={3.3}
            sx={{ borderRadius: "100px", paddingTop: 0, ml: 10 }}
          >
            <Paper
              sx={{
                borderRadius: "10px",

                // width:"400px",
                height: "519px",
                paddingTop: "19px",
              }}
            >
              {" "}
              <Box
                sx={{
                  flexGrow: 1,
                  border: "1px solid #D4D3D3",
                  height: "80px",
                  borderRadius: "10px",
                  ml: "13px",
                  mr: "13px",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs>
                    <Item sx={{ boxShadow: 0 }}>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://s3-alpha-sig.figma.com/img/53a3/66bd/7bf33019ac9f86d90d9a793948ae41ff?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rxj8AztOk2VBD0fDbFy6kEr~6Sppm1K7VbWgudCWrRDgTH5OyEBWhs6FUWJ7oLzmVhlzZAnTiGHhx0NhO8r7g9TjpqssTQS970Rk5bBLAywtnTXA2GTPmQ6sZdcWNDaBrhVCTIDQfQtpc4K4dLvIhZ33sawacQoZxYNl0-6gVBQY95jaJRTdiPfj3Mugpolkcnlqf4fljwZyxKEdeBlQVtkCV1F9xky2EHnSFz6-zTw~0goidYRrZsJoT-2NU5ptJNC87IJhvdIASGXflZVCiyZ6mH7WP2ETDpwIkbZPMzCnabzppb8nl9uGvd9l1CoTIB3kc-62r9LYSvFZft2ZCg__"
                        // alt={item.title}
                        style={{
                          height: "60px",
                          width: "60px",
                          borderRadius: "50%",
                        }}
                        loading="lazy"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          fontSize: "18px",
                          lineHeight: "28px",
                        }}
                      >
                        <Link>{users.name}</Link>
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "28px",
                        }}
                      >
                        {users.email}
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs>
                    <Item sx={{ boxShadow: 0 }}>
                      <ArrowDropDownIcon
                        sx={{ width: "30px", height: "40px" }}
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              <TableContainer sx={{ boxShadow: 0 }} component={Paper}>
                <Table
                  sx={{ borderColor: "transparent" }}
                  aria-label="simple table"
                >
                  <TableBody sx={{ borderColor: "transparent" }}>
                    {rows.map((row) => (
                      <TableRow
                        sx={{ borderColor: "transparent" }}
                        key={row.name}
                        //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell
                          align="right"
                          sx={{
                            borderColor: "transparent",
                            padding: 1.5,
                            paddingLeft: "12px",
                            width: "100px",
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            fontSize: "18px",
                          }}
                        >
                          <b>{row.name}</b>
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderColor: "transparent",
                            padding: "0px",
                            backgroundColor: "white",
                            fontSize: "16px",
                            fontWeight: 500,
                            fontFamily: "Poppins",
                          }}
                        >
                          {row.calories}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        );
      })}
      <Grid item xs={12} sm={8} md={6} lg={4.3} sx={{ ml: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ height: "296px", borderRadius: "10px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: 500,
                  paddingTop: "22px",
                  paddingLeft: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Spending Profile:{" "}
                <Box sx={{ width: "180px", borderColor: "transparent" }}>
                  <FormControl
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      fontSize: "18px",
                      borderColor: "transparent",
                      marginLeft: "1px",
                      width: "190px",
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                  >
                    <Select
                      sx={{ height: "30px", borderColor: "transparent" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(event) => {
                        setSpendingProfile(event.target.value);
                      }}
                    >
                      <MenuItem value={10} sx={{ color: "#0069BF",textDecoration:"none" }}>
                        <Link sx={{ color: "#0069BF" ,textDecoration:"none" }}>Standerd-Traveler</Link>
                      </MenuItem>
                      <MenuItem value={10}>
                        <Link>Standerd-Traveler</Link>
                      </MenuItem>
                      <MenuItem value={10}>
                        <Link>Standerd-Traveler</Link>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0069BF",
                    height: "25.3px",
                    width: "51.3px",
                    marginLeft: "4px",
                  }}
                >
                  Active
                </Button>
              </Typography>
              <Typography>
                <Box
                  spacing={2}
                  sx={{
                    flex: 1,
                    width: "92%",
                    padding: "15px",
                  }}
                >
                  <LinearProgress
                    determinate
                    value={spendingMoney / 100}
                    sx={{
                      height: "25px",
                      borderRadius: "10px",
                      border: "1px solid #0069BF",
                    }}
                  >

                    <Typography>
                        $1850.59
                    </Typography>
                  </LinearProgress>
                  <div style={{ marginTop: "0px" }}>
                    <span
                      style={{
                        color: "#0069BF",
                        fontSize: "12px",
                        fontWeight: 400,
                        fontFamily: "Poppins",
                      }}
                    >
                      $0
                    </span>{" "}
                    <span
                      style={{
                        float: "right",
                        marginLeft: "0px",
                        color: "#0069BF",
                        fontSize: "12px",
                      }}
                    >
                      $10000(100%)
                    </span>
                  </div>
                </Box>
              </Typography>
              <Typography sx={{ paddingLeft: "13px", paddingTop: "20px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>
                  Oldest Transaction:
                </span>{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  12/04/2021(5 days remaining)
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "13px", paddingTop: "10px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>
                  Reporting Period:
                </span>{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  45 Days
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "13px", paddingTop: "10px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>
                  Oldest Reassigned Transaction:
                </span>{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  No transaction
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "13px", paddingTop: "10px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>
                  {" "}
                  Reassigned Transactions Reporting Period:
                </span>{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  45 Days
                </span>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: "225px", borderRadius: "10px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  paddingTop: "14px",
                  paddingLeft: "13px",
                  fontFamily: "Poppins",
                }}
              >
                Profile Activity
              </Typography>
              <Link>
                <Typography sx={{ paddingTop: "15px", paddingLeft: "14px" }}>
                  01/06/2022 03:12 PM
                </Typography>
              </Link>
              <Typography sx={{ paddingTop: "8px", paddingLeft: "14px" }}>
                Profile reactivated upon expense completior card *0735
                eactivated.
              </Typography>
              <Typography
                sx={{
                  paddingTop: "26px",
                  paddingLeft: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/69cd/0a42/bed9012e64012f5a99fe3de4e6ef581e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MmDw6Ehn7egby9mPG0JnuX61epW9Wnn-cr9TT5TkM98GXbSyvQANIrm~mW94L~CvzR-4p82LCDzONdVr3CP6tpCb~8s~Va9-bkdLwzXt3bpm441yVvuNdHc4r7NblUBrS7PbpRTyVaGuf-jCRYbKT2LnjcjGdvyqVwgTcpA4Ujt~aF37K06IrIeAThugJIOnC0Xw~rDsPnVlRfslQTrgno3u8QQ0foQk3oaPDDuDSCQDOCpnyxnBYWoxf7y9Jt9stlBdwSozgaoZKettTi3ygXP1OoCF9Iv1Sni4Sss40hW~TEEEb4bP~u9VPOJ9gr6-veia2g~uI5A6C59yrxywSg__"
                  style={{ height: "25px", width: "25px" }}
                ></img>

                <Profile />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3.2} sx={{ ml: 5 }}>
        <Grid
          sx={{ shadows: "none", borderRadius: "10px" }}
          container
          spacing={1.625}
        >
          <Grid item xs={12}>
            <Paper sx={{ mr: 10, height: "171px", borderRadius: "10px" }}>
              <Typography sx={{ paddingTop: "22px", paddingLeft: "11px" }}>
                Card#3{" "}
                {newReasonValue == "Fraud" ? (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF4B4B",
                      color: "white",
                      height: "25.3px",
                      width: "51.3px",
                      marginLeft: "4px",
                      "&:hover": { backgroundColor: "#FF4B4B" },
                    }}
                  >
                    Fruad
                  </Button>
                ) : newReasonValue == "Loss" ? (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BABABA",
                      height: "25.3px",
                      width: "85.3px",
                      marginLeft: "4px",
                      fontSize: "11px",
                      "&:hover": { backgroundColor: "#BABABA" },
                    }}
                  >
                    Deactivated
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0069BF",
                      height: "25.3px",
                      width: "51.3px",
                      marginLeft: "4px",
                    }}
                  >
                    Active
                  </Button>
                )}
                <span style={{ color: "#C8C8C8", paddingLeft: "6px" }}>
                  008
                </span>
              </Typography>
              <Link>
                <Typography
                  sx={{
                    paddingLeft: "11px",
                    paddingTop: "5px",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  *0735
                </Typography>
              </Link>
              <Typography sx={{ paddingLeft: "11px" }}>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Owen Crean
                </span>
                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "13px",
                  }}
                >
                  2323232323
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "11px", paddingTop: "5px" }}>
                <Replace ReasonProp={newReasonValue} />
                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "13px",
                  }}
                >
                  2323232323
                </span>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ mr: 10, height: "171px", borderRadius: "10px" }}>
              <Typography sx={{ paddingTop: "22px", paddingLeft: "11px" }}>
                Card#2{" "}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: " #FF4B4B",
                    height: "25.3px",
                    width: "51.3px",
                    marginLeft: "4px",
                    "&:hover": { backgroundColor: " #FF4B4B" },
                  }}
                >
                  Fruad
                </Button>
                <span style={{ color: "#C8C8C8", paddingLeft: "6px" }}>
                  008
                </span>
              </Typography>
              <Link>
                <Typography
                  sx={{
                    paddingLeft: "11px",
                    paddingTop: "5px",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  *0735
                </Typography>
              </Link>
              <Typography sx={{ paddingLeft: "11px" }}>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Owen Crean
                </span>
                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "26px",
                  }}
                >
                  2323232x3434
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "11px", paddingTop: "15px" }}>
                <span></span>

                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "13px",
                  }}
                >
                  card block reason:<br></br>0000
                </span>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ mr: 10, height: "171px", borderRadius: "10px" }}>
              <Typography sx={{ paddingTop: "22px", paddingLeft: "11px" }}>
                Card#1
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#BABABA",
                    height: "25.3px",
                    width: "110px",
                    padding: " 3.15px, 8.67px, 3.15px, 8.67px",
                    marginLeft: "4px",
                    "&:hover": { backgroundColor: "#BABABA" },
                  }}
                >
                  Deactivated
                </Button>
                <span style={{ color: "#C8C8C8", paddingLeft: "6px" }}>
                  008
                </span>
              </Typography>
              <Link>
                <Typography
                  sx={{
                    paddingLeft: "11px",
                    paddingTop: "5px",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  *0735
                </Typography>
              </Link>
              <Typography sx={{ paddingLeft: "11px" }}>
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  Owen Crean
                </span>
                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "22px",
                  }}
                >
                  232323x343434
                </span>
              </Typography>
              <Typography sx={{ paddingLeft: "11px", paddingTop: "15px" }}>
                <span></span>

                <span
                  style={{
                    float: "right",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#C8C8C8",
                    fontSize: "12px",
                    marginRight: "13px",
                  }}
                >
                  card block reason:<br></br>0000
                </span>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Main };
