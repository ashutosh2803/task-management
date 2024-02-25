import React from "react";
import TaskList from "./TaskList";
import "../styles/Column.css";

const Column = () => {
  return (
    <div className="Column customFlex">
      <TaskList status={0} />
      <TaskList status={1} />
      <TaskList status={2} />
    </div>
  );
};

export default Column;
