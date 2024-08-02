import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "0px 0px transparent",
  padding: theme.spacing(1),
}));

const  FullWidthGrid = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={8}>
            <Item
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                backgroundColor: "#DBDBDB",
                height: "176px",
                paddingLeft: "92px",
                alignContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignContent: "center",
                }}
              >
                Credit Card Management
                <ArrowRightIcon
                  sx={{
                    height: "15px",
                    width: "15px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "5px",
                    fontSize:"16px",
                    fontWeight:400
                  }}
                />
                OwenCrean
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item
              sx={{
                backgroundColor: "#DBDBDB",
                alignContent: "center",
                height: "176px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    marginLeft: "160px",
                    display: "flex",
                    alignItems: "center",
                    width: "525px",
                    height: "65px",
                    borderRadius: "10px",
                    // borderColor:"#909090",
                    border: "1px solid #909090",
                    fontSize: "20px",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    inputProps={{ "aria-label": "search google maps" }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      height: "56px",
                      marginTop: "4px",
                      marginBottom: "5px",
                      backgroundColor: "#0069BF",
                      borderRadius: "10px",
                      width: "60px",
                    }}
                  >
                    <SearchIcon sx={{ width: "35px", height: "35px" }} />
                  </Button>
              
                </Paper>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export {FullWidthGrid}