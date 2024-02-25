import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { TextField, Button } from "@mui/material";
// import "../styles/TaskForm.css"

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
      <div className="TaskFormInput">
        <TextField
          inputProps={{ "data-testid": "name" }}
          sx={{ mb: 1.5, mr: 1.5, ml: 1.5 }}
          label="Name"
          required
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="TaskFormInput">
        <TextField
          sx={{ mb: 1.5, mr: 1.5, ml: 1.5 }}
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
      </div>
      <div className="TaskFormInputDeadline">
        <TextField
          sx={{ mb: 1.5 }}
          inputProps={{ "data-testid": "deadline" }}
          label="Deadline"
          required
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        />
      </div>
      <div> 
        <TextField sx={{mr: 1.5, ml: 1.5, mb: 1.5}} size="small" type="file" />
      </div>
      <Button type="submit" sx={{ mb: 1.5 }} className="TaskFormButton" variant="contained" color="success">
        Add task
      </Button>
    </form>
  );
};

export default TaskForm;
