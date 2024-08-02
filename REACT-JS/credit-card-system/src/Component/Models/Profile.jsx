import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import tableCellClasses from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { openProfileModel,closeProfileModel } from "../../slice/model";

import { getYourData } from "../../slice/fetchDataSlice";
import {STATUS} from '../../slice/fetchDataSlice'





// style for box model -------

const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  height: "703px",
  bgcolor: "background.paper",
  border: "1px solid",
  boxShadow: 24,
  borderColor: "#C2C2C2",
  borderRadius: "10px 10px 1px 0px",
  outline: 0,
};

// style for model table cell ------

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

// component --------

const Profile = () => {
const boxValue = useSelector((state)=>state.models.profileModelValue)
const dispatch = useDispatch()

 const userData1 = useSelector((state) => state.userData.data);

 useEffect(() => {
   dispatch(getYourData());
 }, []);
 
 



  return (
    <>
      <Link onClick={() => dispatch(openProfileModel())}>
        <Typography style={{ paddingLeft: "11px" }}>
          View All Profile Activity
        </Typography>
      </Link>

      <Modal
        open={boxValue}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              fontFamily: "Poppins",
              width: "650px",
              backgroundColor: "#EFEEEE",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ paddingLeft: "20px" }}>
              Profile Acitvity
            </Typography>
          </Typography>
          <TableContainer
            sx={{
              width: "100%",
              maxHeight: "560px",
              overflowY: "auto",
            }}
          >
            <Table
              aria-label="customized table"
              sx={{
                height: "max-content",
              }}
            >
              <TableBody>
                {userData1.map((user, index) => (
                  <React.Fragment key={index}>
                    {user.ProfileActivity.map((profile, pIndex) => (
                      <StyledTableRow key={`${index}-${pIndex}`}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{
                            fontSize: "12px",
                            width: "120px",
                            color: "#0069BF",
                          }}
                        >
                          {profile.Time}
                        </StyledTableCell>
                        <StyledTableCell
                          align="left"
                          sx={{ width: "440px", fontSize: "12px" }}
                        >
                          {profile.Details}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography>
            <Button
              onClick={() => dispatch(closeProfileModel())}
              sx={{
                float: "right",
                marginRight: "20px",
                marginTop: "20px",
                width: "72px",
                height: "42px",
                backgroundColor: "#507087",
                color: "white ",
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
};

export { Profile };
