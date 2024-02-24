import React, { useContext } from "react";
import { Button } from "@mui/material";
import { DialogContext } from "../context/DialogContext";
import { Add } from "@mui/icons-material";
const Header = () => {
  const { setIsOpen } = useContext(DialogContext);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className="Header customFlex">
      <h2>Task Management</h2>
      <Button variant="contained" color="info" endIcon={<Add/>} onClick={handleClickOpen}>
        New task
      </Button>
    </header>
  );
};

export default Header;
