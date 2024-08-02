import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupIcon from "@mui/icons-material/Group";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlightIcon from "@mui/icons-material/Flight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function createData(name, calories) {
  return { name, calories };
}
const rows = [
  createData("Cost Center", "930480808-8080808IT-Education"),
  createData("Primary Email", "SJain@gmail.com"),
  createData("Mobile Phone", 12121212),
  createData("Work Phone", 34839834),
  createData("Home Phone", 92939393),
  createData("Emergency Contact Name", "Dhaval"),
  createData("Phone", 384889391),
];
const Item = styled(Paper)(({ theme }) => ({}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "950px",
  height: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const pages = ["Travel", "Expense", "Help"];

const Navbar = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [arrow, setArrow] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "sky" }}>
        <Container maxWidth="l">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontSize: "25px",
                fontFamily: "Roboto",
                fontWeight: 700,

                color: "white",
                textDecoration: "none",
              }}
            >
              go
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => {
                  setAnchorElNav(e.currentTarget);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => {
                  setAnchorElNav(null);
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      setAnchorElNav(null);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    setAnchorElNav(null);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "inherit",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip>
                <IconButton
                  onClick={(e) => {
                    setArrow(true);
                    setAnchorElUser(e.currentTarget);
                  }}
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://lh3.googleusercontent.com/proxy/sLZHwKxgvKhifR2o7JlInJ1pu_Pu5mExLMDeJFGQcnrYBrKDuygIQM8gW2JEoRbQD-DSHll45rEa9vsTIbNWgVuMTeqO81zydTL4OnmD0A_iP33XqlojJ6vr6ZQgOuvOHOZIOZysYB7UskM"
                  />
                  {arrow ? (
                    <KeyboardArrowDownIcon sx={{ color: "white" }} />
                  ) : (
                    <KeyboardArrowUpIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => {
                  setArrow(false);
                  setAnchorElUser(null);
                }}
              >
                <MenuItem
                  sx={{
                    width: "330px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      {" "}
                      <Avatar
                        alt="Remy Sharp"
                        src="https://lh3.googleusercontent.com/proxy/sLZHwKxgvKhifR2o7JlInJ1pu_Pu5mExLMDeJFGQcnrYBrKDuygIQM8gW2JEoRbQD-DSHll45rEa9vsTIbNWgVuMTeqO81zydTL4OnmD0A_iP33XqlojJ6vr6ZQgOuvOHOZIOZysYB7UskM"
                      />
                    </Typography>
                    <Box>
                      <Typography
                        sx={{
                          marginLeft: "14px",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: "700",
                        }}
                      >
                        Alina frizinedf
                      </Typography>
                      <Typography
                        sx={{
                          marginLeft: "14px",
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          fontWeight: "300",
                        }}
                      >
                        Assoicate Director,bussiness solution
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1.8, display: "flex", width: "300px" }}>
                    <Button
                      fullWidth
                      sx={{
                        p: 1,
                        backgroundColor: "#a1d9ef",
                        color: "#0c76b9",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      Switch to administrator
                    </Button>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      My Profile
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 0.8 }}>
                    <Typography>User</Typography>
                  </Box>
                </MenuItem>
              </Menu>
              <div>
                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Box>
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={4}
                          sx={{ backgroundColor: "#002746", width: "100%" }}
                        >
                          <Item
                            sx={{ backgroundColor: "#002746", height: "600px" }}
                          >
                            <Box sx={{ p: 5 }}>
                              <Typography
                                sx={{
                                  fontFamily: "Roboto",
                                  fontSize: "30px",
                                  color: "white",
                                }}
                              >
                                go EXPENSE
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                paddingLeft: "50px",
                                paddingTop: "20px",
                                alignItems: "center",
                              }}
                            >
                              <PersonIcon
                                sx={{ color: "white", fontSize: "20px" }}
                              />
                              <Typography
                                sx={{
                                  pl: "8px",
                                  fontFamily: "Roboto",
                                  fontSize: "20px",
                                  color: "white",
                                }}
                              >
                                Personal
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                minWidth: 120,
                                paddingTop: "0px",
                                paddingLeft: "30px",
                              }}
                            >
                              <FormControl sx={{ width: "150px" }}>
                                <InputLabel
                                  sx={{
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  id="demo-simple-select-label"
                                >
                                  <FlightIcon
                                    sx={{
                                      color: "white",
                                      pr: "6px",
                                      pl: "5px",
                                      rotate: "70deg",
                                    }}
                                  />
                                  Travel
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  label="Age"
                                  onChange={(e) => {
                                    setAge(e.target.value);
                                  }}
                                  sx={{
                                    borderColor: "white",
                                    color: "white",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                      border: "none",
                                    },
                                    "& .MuiSelect-icon": {
                                      color: "white", // Set icon color to white
                                    },
                                  }}
                                  IconComponent={(props) => (
                                    <ArrowDropDownIcon
                                      {...props}
                                      style={{ color: "white" }}
                                    />
                                  )}
                                >
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                paddingLeft: "50px",
                                paddingTop: "1px",
                                alignItems: "center",
                              }}
                            >
                              <CreditCardIcon
                                sx={{ color: "white", fontSize: "20px" }}
                              />
                              <Typography
                                sx={{
                                  pl: "8px",
                                  fontFamily: "Roboto",
                                  fontSize: "20px",
                                  color: "white",
                                }}
                              >
                                Card & Payment
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                paddingLeft: "0px",
                                marginLeft: "50px",
                                // paddingTop: "15px",
                                marginTop: "15px",
                                marginRight: "70px",
                                alignItems: "center",
                                "&:hover": {
                                  backgroundColor: "slateblue",
                                },
                              }}
                            >
                              <GroupIcon
                                sx={{ color: "white", fontSize: "20px" }}
                              />
                              <Typography
                                sx={{
                                  pl: "8px",
                                  fontFamily: "Roboto",
                                  fontSize: "20px",
                                  color: "white",
                                }}
                              >
                                Delegates
                              </Typography>
                            </Box>
                          </Item>
                        </Grid>
                        <Grid item xs={8}>
                          <Item
                            sx={{ height: "600px", backgroundColor: "#DBDBDB" }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "20px",
                                height: "60px",
                                backgroundColor: "white",
                              }}
                            >
                              <Typography
                                sx={{
                                  alignSelf: "start",
                                  fontFamily: "Roboto",
                                  fontSize: "20px",
                                  fontWeight: "800",
                                  paddingRight: "20px",
                                }}
                              >
                                Personal Details
                              </Typography>
                              <Typography sx={{ marginLeft: "150px" }}>
                                <Stack spacing={1} direction="row">
                                  <Button
                                    variant="contained"
                                    sx={{
                                      backgroundColor: "white",
                                      color: "black",
                                      borderRadius: "8px",
                                      "&:hover": {
                                        backgroundColor: "white",
                                      },
                                    }}
                                    onClick={() => {
                                      setOpen(false);
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      borderRadius: "8px",
                                    }}
                                  >
                                    Save
                                  </Button>
                                </Stack>
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                backgroundColor: "white",
                                margin: "30px",
                                height: "480px",
                                borderRadius: "10px",
                              }}
                            >
                              <Box sx={{ paddingTop: "40px" }}>
                                <Avatar
                                  sx={{
                                    height: "100px",
                                    width: "100px",
                                    marginLeft: "30px",
                                  }}
                                  alt="Remy Sharp"
                                  src="https://lh3.googleusercontent.com/proxy/sLZHwKxgvKhifR2o7JlInJ1pu_Pu5mExLMDeJFGQcnrYBrKDuygIQM8gW2JEoRbQD-DSHll45rEa9vsTIbNWgVuMTeqO81zydTL4OnmD0A_iP33XqlojJ6vr6ZQgOuvOHOZIOZysYB7UskM"
                                />
                              </Box>
                              <Box
                                sx={{ marginLeft: "20px", marginTop: "10px" }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Swati Jain
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  fontFamily: "Roboto",
                                  fontSize: "15px",
                                  marginLeft: "20px",
                                  fontWeight: "300",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Roboto",
                                    fontSize: "15px",
                                    fontWeight: "300",
                                    marginRight: "15px",
                                  }}
                                >
                                  External Contractor,External Contractor
                                  <hr></hr>
                                </Typography>
                              </Box>

                              <TableContainer>
                                <Table
                                  aria-label="simple table"
                                  sx={{ borderColor: "transparent" }}
                                >
                                  <TableBody
                                    sx={{ borderColor: "transparent" }}
                                  >
                                    {rows.map((row) => (
                                      <TableRow
                                        key={row.name}
                                        sx={{
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        }}
                                      >
                                        <TableCell
                                          component="th"
                                          scope="row"
                                          sx={{
                                            paddingTop: "0px",
                                            borderColor: "transparent",
                                            color: "#6A6A6A",
                                            fontFamily: "Roboto",
                                          }}
                                        >
                                          {row.name}
                                        </TableCell>
                                        <TableCell
                                          align="left"
                                          sx={{
                                            paddingTop: "0px",
                                            borderColor: "transparent",
                                            fontFamily: "Roboto",
                                            fontWeight: "700",
                                          }}
                                        >
                                          {row.calories}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Modal>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;




