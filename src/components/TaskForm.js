import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { TextField, Button } from "@mui/material";
import "../styles/TaskForm.css"

const TaskForm = ({ setIsOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const { addTask } = useContext(AppContext);

  const onAddBtnClicked = () => {
    const data = { name, description, deadline, status: 0 };
    addTask(data);
    setName("");
    setDescription("");
    setDeadline("");
    setIsOpen(false);
  };

  return (
    <form
      className="TaskForm"
      onSubmit={(e) => {
        onAddBtnClicked();
        e.preventDefault();
      }}
    >
      <TextField
        inputProps={{ "data-testid": "name" }}
        className="TaskFormInput"
        label="Name"
        required
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        inputProps={{ "data-testid": "description" }}
        className="TaskFormInput"
        label="Description"
        required
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TextField
        inputProps={{ "data-testid": "deadline" }}
        className="TaskFormInput"
        label="Deadline"
        required
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        type="date"
        value={deadline}
        onChange={(event) => setDeadline(event.target.value)}
      />
      <Button type="submit" className="TaskFormButton" variant="contained" color="success">
        Add task
      </Button>
    </form>
  );
};

export default TaskForm;
