import React, { useContext } from "react";
import { Button } from "@mui/material";
import { DialogContext } from "../context/DialogContext";
import { Add, DarkMode, LightMode } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { setIsOpen } = useContext(DialogContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className="Header customFlex">
      <h2>Task Management</h2>
      {theme === 1 ? (
        <LightMode onClick={() => toggleTheme(1)} />
      ) : (
        <DarkMode onClick={() => toggleTheme(2)} />
      )}
      <Button
        variant="contained"
        color="info"
        endIcon={<Add />}
        onClick={handleClickOpen}
      >
        New task
      </Button>
    </header>
  );
};

export default Header;
