import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useSelector, useDispatch } from "react-redux";
import { openReplaceModel, closeReplaceModel } from "../../slice/model";

import { getYourData } from "../../slice/fetchDataSlice";
import { STATUS } from "../../slice/fetchDataSlice";
import {
  mail,
  reason,
  address1,
  address2,
  country,
  state,
  city,
  zip,
} from "../../slice/ReplaceForm";

// Create data for replace model table
const createData = (name) => {
  return { name };
};

// Rows for the table
const rows = [
  createData("Mail To:"),
  createData("Address Line 1:"),
  createData("Address Line 2:"),
  createData("Country:"),
  createData("State / Province:"),
  createData("City / Territory:"),
  createData("Zip / Postal Code:"),
];

const Replace = ({ ReasonProp }) => {
  const dispatch = useDispatch();
  const replaceBox = useSelector((state) => state.models.replaceModelValue);
  const shippingData1 = useSelector((state) => state.replacemodel.shippingData);

  const userData1 = useSelector((state) => state.userData.data);

  useEffect(() => {
    dispatch(getYourData());
  }, []);

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.patch(`http://localhost:3033/users/c993`, {
        shippingData1,
      });

      setFormError(Validation(shippingData1));
      setIsSubmit(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Validation function
  const Validation = (values) => {
    const errors = {};

    if (!values.MailTo) {
      errors.MailTo = "Email is required";
    }
    if (!values.Address1) {
      errors.Address1 = "Address is required";
    }
    if (!values.Address2) {
      errors.Address2 = "Address2  is Must required";
    }
    if (!values.Country) {
      errors.Country = "Please enter a Country name";
    }
    if (!values.State) {
      errors.State = "Please enter the state name";
    }
    if (!values.City) {
      errors.City = "Please enter the city name";
    }
    if (!values.Zip) {
      errors.Zip = "Please enter the zip code";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("No validation errors, ready to submit.");

      handleSubmit();
    }
  }, [formError]);

  // Style for modal box
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: "759px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  // State for modal open/close

  return (
    <>
      <Typography>
        {ReasonProp == "Fraud" || ReasonProp == "Loss" ? (
          ""
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0069BF",
              height: "42px",
              width: "136px",
              borderRadius: "5px",
              padding: "8px 13px 8px 13px",
              marginLeft: "4px",
              fontSize: "12px",
            }}
            onClick={() => dispatch(openReplaceModel())}
          >
            Replace Card
          </Button>
        )}

        <Modal
          open={replaceBox}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style1}>
            <Typography
              id="modal-modal-title"
              sx={{
                height: "60px",
                backgroundColor: "#EFEEEE",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#181623",
                  paddingLeft: "22px",
                }}
              >
                Card Replacement
              </Typography>
            </Typography>
            <Typography
              sx={{
                mt: "20px",
                width: "545px",
                marginLeft: "22px",
                height: "50px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: 500,
                  width: "545px",
                }}
              >
                This will initiate replacement process of Card #43 (*0048) for
                Rachel Becker
              </Typography>
            </Typography>
            <Typography sx={{ marginTop: "26px", marginLeft: "22px" }}>
              <FormControl>
                <FormLabel
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    fontSize: "18px",
                  }}
                >
                  Reason:
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    dispatch(reason(e.target.value));
                  }}
                >
                  <FormControlLabel
                    sx={{
                      color: "black",
                      fontWeight: 500,
                      fontFamily: "Poppins",
                      fontSize: "18px",
                    }}
                    value="Fraud"
                    control={<Radio />}
                    label="Fraud"
                  />
                  <FormControlLabel
                    sx={{
                      color: "black",
                      fontWeight: 500,
                      fontFamily: "Poppins",
                      fontSize: "18px",
                    }}
                    value="Loss"
                    control={
                      <Radio
                      // checked={fraud}
                      />
                    }
                    label="Lost"
                  />
                </RadioGroup>
              </FormControl>
            </Typography>
            <Typography sx={{ marginLeft: "22px" }}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: 700,
                  width: "193px",
                  height: "40px",
                }}
              >
                {" "}
                Shipping Address:
              </Typography>
            </Typography>
            <Typography>
              <Grid container spacing={0}>
                <Grid
                  sx={{
                    borderColor: "transparent",
                    border: "0px",
                    width: "184px",
                  }}
                >
                  <Paper
                    style={{
                      height: "336px",
                      borderColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <Typography>
                      <TableContainer>
                        <Table
                          sx={{
                            width: "184px",
                            padding: 0,
                            ml: "0px",
                            height: "336px",
                          }}
                          aria-label="simple table"
                        >
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell
                                  component="td"
                                  scope="row"
                                  align="right"
                                  sx={{
                                    width: "150px",
                                    fontSize: "18px",
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    borderColor: "transparent",
                                    marginTop: "0px",
                                    paddingTop: "0",
                                    paddingBottom: "0",
                                    height: "0px",
                                  }}
                                >
                                  {row.name}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper
                    style={{
                      height: "336px",
                      border: "1px solid transparent ",
                      boxShadow: "none",
                    }}
                  >
                    <Box component="form" noValidate autoComplete="off">
                      <TextField
                        onChange={(e) => dispatch(mail(e.target.value))}
                        value={shippingData1.MailTo}
                        placeholder="Rachel Backer"
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.MailTo}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "10  px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(address1(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.Address1}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.Address1}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(address2(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.Address2}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.Address2}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(country(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.Country}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.Country}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(state(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.State}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.State}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(city(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.City}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.City}
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{ marginTop: "8px" }}
                    >
                      <TextField
                        onChange={(e) => dispatch(zip(e.target.value))}
                        placeholder="Rachel Backer"
                        value={shippingData1.Zip}
                        sx={{
                          height: "40px",
                          display: "flex",
                          "& .MuiInputBase-root": { height: "40px" },
                        }}
                      />
                      <Typography sx={{ color: "red", fontSize: "11px" }}>
                        {formError.Zip}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Typography>
            <Typography>
              <Typography
                style={{
                  float: "right",
                  marginRight: "10px",
                  marginTop: "40px",
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    variant="contained"
                    sx={{
                      width: "140px",
                      height: "42px",
                      borderRadius: "5px",
                      padding: "8px 13px 8px 13px",
                      backgroundColor: "#0069BF",
                    }}
                  >
                    Replace Card
                  </Button>
                  <Button
                    onClick={() => dispatch(closeReplaceModel())}
                    variant="contained"
                    sx={{
                      width: "84px",
                      height: "42px",
                      backgroundColor: "#507087",
                      "&:hover": { backgroundColor: "#507087" },
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Typography>
            </Typography>
          </Box>
        </Modal>
      </Typography>
    </>
  );
};

export { Replace };
