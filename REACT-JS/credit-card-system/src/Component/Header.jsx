// import * as React from "react";

import CardImage from "../assets/images/Credit_Card.png";
import { Link } from "@mui/material";
// import {AppBar,Avatar, BottomNavigation, Box,Button,Container,CssBaseline, IconButton,Link,Menu,MenuItem,Paper,Toolbar,Tooltip,Typography,} from "@mui/material";

// const pages = [];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const  ResponsiveAppBar = ()=> {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <header style={{ marginTop: "9px", marginRight: "9px", marginLeft: "9px" }}>
//       <AppBar
//         position="static"
//         sx={{
//           background: "#002746",
//           left: 10,
//           top: 9,
//           borderRadius: "10px",
//           textAlign: "center",
//         }}
//       >
//         <Container maxWidth="l">
//           <Toolbar disableGutters>
//             <Box
//               component="img"
//               sx={{
//                 height: "50px",
//                 width: "50px",
//                 // pr: "5px",
//                 // pl: "5px",
//               }}
//               src={CardImage}
//               alt="Card Image" // Provide an appropriate alt text
//               loading="lazy"
//             />

//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Roboto",
//                   fontWeight: 700,
//                   fontSize:"16px",
//                   textDecoration: "none",
//                   pl: "9px",
//                 }}
//               >
//                 Credit Card<br></br> Management
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontFamily: "Roboto",
//                   fontWeight: 700,
//                   textDecoration: "none",

//                   pl: "40px",
//                   wordBreak: "break-word",
//                   display: "block",
//                 }}
//               >
//                 <Link style={{ color: "#00B1B0" }}>Credit Card Management</Link>
//               </Typography>
//             </Box>
//             <Typography
//               sx={{
//                 fontFamily: "Roboto",
//                 fontWeight: 300,
//                 pl: "30px",
//                 textDecoration: "none",
//               }}
//             >
//               Spending Profiles
//             </Typography>

//             <Box
//               sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//             ></Box>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar
//                     alt="Remy Sharp"
//                     src="/static/images/avatar/2.jpg"
//                     sx={{ width: "40px", height: "40px" }}
//                   />
//                 </IconButton>
//               </Tooltip>

//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <Typography
//               sx={{
//                 fontFamily: "Roboto",
//                 fontWeight: 500,
//                 fontSize:"16px",
//                 pl: "12px",
//                 textDecoration: "none",
//               }}
//             >
//               Rachel Becker
//             </Typography>
//           </Toolbar>
//         </Container>

       
//       </AppBar>
//     </header>
//   );
// }
// export { ResponsiveAppBar};


import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const  ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header style={{ margin: "10px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#002746",
          borderRadius: "10px",
        }}
      >
        <Container maxWidth="l">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={CardImage} width={"50px"} height={"50px"}></img>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontsize: "20",
                  fontWeight: 700,
                  marginLeft: "20px",
                }}
              >
                Credit Card<br></br>
                Management
              </Typography>
              <Typography sx={{ paddingTop: "12px" }}>
                <Link
                  sx={{
                    fontFamily:"Poppins",
                    fontsize:"16px",
                    fontWeight:700,
                    color: "#00B1B0",
                    textAlign: "center",
                    marginLeft: "30px",
                  }}
                >
                  Credit Card Management
                </Link>
              </Typography>

              <Typography sx={{ paddingTop: "12px", marginLeft: "30px",fontFamily:"Poppins",fontsize:"16px",fontFamily:700 }}>
                Spending Profile
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <Typography sx={{color:"white",fontsize:"16px",fontFamily:"Poppins",fontWeight:500,paddingLeft:"10px"}}>Rachel Backer</Typography>
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
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
export { ResponsiveAppBar}