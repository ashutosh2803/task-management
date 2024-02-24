import { createContext, useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(() => {
    console.log("localstorage called!");
    const saved = localStorage.getItem('taskList');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  },[taskList])
  
  const addTask = (task) => {
    const id = uuid();
    setTaskList([...taskList, { ...task, id }]);
  };

  const removeTask = (id) => {
    const filteredTask = taskList.filter((item) => item.id !== id);
    setTaskList(filteredTask);
  };

  const updateTask = (task) => {
    const updatedTasks = taskList.map((item) => {
      return item.id === task.id ? task : item;
    });
    setTaskList(updatedTasks);
  };

  const sortByName = () =>
    taskList.sort((t1, t2) => {
      const name1 = t1.name.toUpperCase();
      const name2 = t2.name.toUpperCase();
      if (name1 < name2) return -1;
      else if (name1 > name2) return 1;
      else return 0;
    });

  const values = { taskList, setTaskList, addTask, removeTask, updateTask, sortByName };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
