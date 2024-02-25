import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UpdateForm from "./UpdateForm";
import "../styles/Task.css";

const Task = ({ task }) => {
  const { removeTask, pinToFavorites, isTaskFavorited, removeFromFavorites } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const onEditBtnClicked = () => {
    setIsEditing(!isEditing);
  };

  const onDeleteBtnClicked = () => {
    removeTask(task.id);
  };

  const onPinClicked = () => {
    pinToFavorites(task.id); // Call function from AppContext to toggle favorite state
  };
  const onPinUnClicked = () => {
    removeFromFavorites(task.id); // Call function from AppContext to un-toggle favorite state
  }

  if (isEditing) return <UpdateForm task={task} setIsEditing={setIsEditing} />;

  return (
    <Card variant="outlined" className="customContainer">
      <CardContent>
        <Typography sx={{ px: 2 }} variant="h5" component="div">
          {task.name}
        </Typography>
        <Typography sx={{ fontSize: 14, p: 2, pb: 1 }} color="text.secondary">
          {task.description}
        </Typography>
        <Typography sx={{ fontSize: 14, px: 2 }} color="text.secondary" gutterBottom>
          {task.deadline}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={onEditBtnClicked}
            color="warning"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            data-testid="deleteBtn"
            name="delete"
            size="small"
            color="error"
            onClick={onDeleteBtnClicked}
          >
            Delete
          </Button>
          <Button
            size="small"
            color={isTaskFavorited(task.id) ? "primary" : "secondary"} // Change button color based on favorite state
            onClick={isTaskFavorited(task.id) ? onPinClicked : onPinUnClicked}
          >{isTaskFavorited(task.id) ? <PushPinIcon/> : <PushPinOutlinedIcon/>}
          </Button> 
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Task;
