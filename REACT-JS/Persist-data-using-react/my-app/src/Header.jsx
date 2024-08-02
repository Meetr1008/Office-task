import React from 'react'
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Header = () => {
  const [myData, setMyData] = useState([]);
  const [userData, setUserData] = useState({ email: "", pass: "" });
  const [counter, setCounter] = useState(1);

  const getData = async () => {
    const res = await axios.get("http://localhost:3032/users");
    setMyData(res.data);
    console.log(res.data);
  };

  const submitData = async () => {
    const user = `user${counter}`;
    const res = await axios.post("http://localhost:3032/users", {
      [user]: userData,
    });
    setUserData({ email: "", pass: "" });
    setCounter(counter + 1);
    getData();
    handleClose();
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3032/users/${id}`);
    getData();
    handleClose();
  };

  useEffect(() => {
    getData();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleOpen}>Click me</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              margin: "20px",
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Email:</Typography>
            <Typography>
              <TextField
                value={userData.email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                id="outlined-basic"
                variant="outlined"
              />
            </Typography>
          </Box>
          <Box
            sx={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Pass:</Typography>
            <Typography>
              <TextField
                value={userData.pass}
                onChange={(e) => {
                  setUserData({ ...userData, pass: e.target.value });
                }}
                id="outlined-basic"
                variant="outlined"
              />
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "30px",
            }}
          >
            <Typography>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={submitData}>
                  Submit
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleDelete(myData.length ? myData[0].id : null)
                  }
                >
                  Delete
                </Button>
              </Stack>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Header
