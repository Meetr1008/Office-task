import { Typography, Grid, Box } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Decline } from "./Models/Decline";
import DateImage from "../assets/images/img.jsx";
import { useDispatch, useSelector } from "react-redux";
import { startDate, endDate } from "../slice/dateslice";
import { getYourData } from "../slice/fetchDataSlice";
import {Table,TableBody,TableCell, TableContainer, TableHead,TableRow, Paper,styled,tableCellClasses,} from "@mui/material";
import React, {  useEffect } from "react";
import { BottomNavigation } from "@mui/material";
import { addFilterData } from "../slice/TransactionSlice";

// style table cells

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.light,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    borderRadius: "10px",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Transaction = () => {
  const dispatch = useDispatch();

  const sDate = useSelector((state) => state.date.value.startDate);
  const eDate = useSelector((state) => state.date.value.endDate);
  const userData1 = useSelector((state) => state.userData.data);

   useEffect(() => {
     dispatch(getYourData());
   }, []);
 
  // get first transaction data from the api for filter ------

  const TransactionData = userData1.map((e) => {
    return e.Transactions;
  });

  //set startDate and endDate for filter data in table----

  // const [filterData, setFilterData] = useState("");

  const newFilterData = useSelector((state)=>state.filterData.value)

  const formatStartDate = dayjs(sDate).format("MM/DD/YYYY");

  const FirstDate = new Date(formatStartDate);

  const formatEndDate = dayjs(eDate).format("MM/DD/YYYY");

  const LastDate = new Date(formatEndDate);

  // handle function for filter Data ---------

  const handleFilterData = () => {
    const finalFilterData = TransactionData.map((e) => {
      return e.filter((item) => {
        const transactionDate = new Date(item.TransactionDate);
        return transactionDate >= FirstDate && transactionDate <= LastDate;
      });
    });
    // setFilterData(finalFilterData);
    dispatch(addFilterData(finalFilterData))
  };
  return (
    <>
      <Typography
        sx={{
          paddingTop: "73px",
          paddingLeft: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container alignItems="center">
          <Grid
            item
            sx={{ fontWeight: 700, fontSize: "24px", fontFamily: "Roboto" }}
          >
            <span style={{}}>Transactions</span>
          </Grid>
          <Grid item>
            <span style={{ paddingLeft: "30px" }}>Choose Dates:</span>
          </Grid>
          <Grid item sx={{ paddingLeft: "15px" }}>
            <Box component="form" noValidate autoComplete="off">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "MobileDatePicker",
                    "DesktopDatePicker",
                    "StaticDatePicker",
                  ]}
                  sx={{ backgroundColor: "", width: "150px", height: "60px" }}
                >
                  <DatePicker
                    slots={{
                      height: "25px",
                      width: "25px",
                      openPickerIcon: DateImage,
                    }}
                    onChange={(date) => dispatch(startDate(date.$d))}
                    sx={{ background: "white" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid
            item
            sx={{ fontWeight: 400, fontSize: "16px", fontFamily: "Poppins" }}
          >
            <span style={{ paddingLeft: "15px" }}>to</span>
          </Grid>
          <Grid item sx={{ paddingLeft: "15px" }}>
            <Box component="form" noValidate autoComplete="off">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "MobileDatePicker",
                    "DesktopDatePicker",
                    "StaticDatePicker",
                  ]}
                  sx={{ width: "150px" }}
                >
                  <DatePicker
                    slots={{
                      height: "25px",
                      width: "25px",
                      openPickerIcon: DateImage,
                    }}
                    dateFormat="YYYY/MM/DD"
                    onChange={(date) => {
                      dispatch(endDate(date.$d));
                      handleFilterData();
                    }}
                    sx={{ backgroundColor: "white" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Grid>

          <Grid
            item
            xs
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              fontWeight: 400,
              fontSize: "16px",
              fontFamily: "Poppins",
              marginRight: "80px",
            }}
          >
            <Decline TransactionData={TransactionData} />
          </Grid>
        </Grid>
      </Typography>

      <Box sx={{ margin: "0 80px 0 80px" }}>
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            marginTop: "20px",

            borderRadius: "15px",
            marginBottom: "100px",
          }}
        >
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "white" }}>
                <StyledTableCell
                  sx={{
                    width: "196px",
                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                >
                  Transaction Date
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    width: "170px",
                    paddingRight: "70px",
                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                  align="left"
                >
                  Posted Date
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    width: "150px",
                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                  align="left"
                >
                  Card
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    width: "1px",
                    width: "400px",
                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                  align="left"
                >
                  Merchant
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    width: "150px",
                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                  align="left"
                >
                  Amount
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    width: "200px",

                    border: "1px solid #DBDBDB",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    paddingTop: "15px",
                  }}
                  align="left"
                >
                  Status
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {newFilterData.length > 0 &&
                newFilterData.map((user, index) => (
                  <React.Fragment key={index}>
                    {user.map((transaction, tIndex) => (
                      <StyledTableRow key={`${index}-${tIndex}`}>
                        <StyledTableCell>
                          {transaction.TransactionDate}
                        </StyledTableCell>
                        <StyledTableCell>
                          {transaction.PostedDate}
                        </StyledTableCell>
                        <StyledTableCell>{transaction.Card}</StyledTableCell>
                        <StyledTableCell>
                          {transaction.Merchant}
                        </StyledTableCell>
                        <StyledTableCell>{transaction.Amount}</StyledTableCell>
                        <StyledTableCell>{transaction.Status}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </React.Fragment>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <>
        <Box sx={{ mt: 8 }}>
          <Paper
            sx={{
              position: "static",
              backgroundColor: " #DBDBDB",
              bottom: 0,
              right: 0,
              left: 0,
            }}
          >
            <BottomNavigation sx={{ backgroundColor: " #DBDBDB" }}>
              <Typography
                variant="body2"
                color="black"
                sx={{
                  // fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                © Copyright 2024, Credit Card Management
              </Typography>
            </BottomNavigation>
          </Paper>
        </Box>
      </>
    </>
  );
};

export { Transaction };
