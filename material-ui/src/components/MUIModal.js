import { Button, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const MUIModal = () => {
  // const name = useRef('')
  // const register = useRef('')
  // const section = useRef('')
  const [popup, setPopup] = useState(false);
  const [show, setShow] = useState(false);
  // const[name,setName] = useState('');
  // const[register,setRegister] = useState('');
  // const[section,setSection] = useState('')
  const formValue = useRef({
    name: "",
    register: "",
    section: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValue.current.name);
    setShow(true);
  };

  const handleClick = () => {
    setPopup(true);
  };
  const handleClose = () => {
    setPopup(false);
  };
  const style = {
    position: "absolute",
    top: "40%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick} type="button">
        Click Me
      </Button>
      <Modal
        open={popup}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <Box sx={style}>
          <Typography id="title" variant="h4">
            Open Modal Heading
          </Typography>
          <Typography id="description" variant="p">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="enter your name here"
                onChange={(e) => (formValue.current.name = e.target.value)}
              />
              <br />
              <input
                type="number"
                placeholder="enter your registration number"
                onChange={(e) => (formValue.current.register = e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="enter your section"
                onChange={(e) => (formValue.current.section = e.target.value)}
              />
              <br />
              <Button type="submit">Submit</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
      <p>
        {show
          ? `N ${formValue.current.name}   R  ${formValue.current.register}  S ${formValue.current.section}  `
          : ""}
      </p>
    </div>
  );
};

export default MUIModal;
