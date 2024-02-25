import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem("taskList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [favoriteList, setFavoriteList] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteList");
    const initialFavorites = JSON.parse(savedFavorites);
    return initialFavorites || [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const addTask = (task) => {
    const id = uuid();
    setTaskList([...taskList, { ...task, id, isFavorite: false }]);
  };

  const removeTask = (id) => {
    const filteredTask = taskList.filter((item) => item.id !== id);
    setTaskList(filteredTask);
    removeFromFavorites(id); // Remove from favorites if present
  };

  const updateTask = (task) => {
    const updatedTasks = taskList.map((item) => {
      return item.id === task.id ? task : item;
    });
    setTaskList(updatedTasks);
  };

  // const sortByName = () =>
  //   taskList.sort((t1, t2) => {
  //     const name1 = t1.name.toUpperCase();
  //     const name2 = t2.name.toUpperCase();
  //     if (name1 < name2) return -1;
  //     else if (name1 > name2) return 1;
  //     else return 0;
  //   });

  const pinToFavorites = (id) => {
    let taskToFavorite = taskList.filter((item) => item.id === id);
    if (taskToFavorite) {
      updateTask({ ...taskToFavorite, isFavorite: true }); // Update task in taskList
      setFavoriteList([
        ...favoriteList,
        { ...taskToFavorite, isFavorite: true },
      ]);
    }
  };

  const removeFromFavorites = (id) => {
    let filteredFavorites = taskList.filter((item) => item.id !== id);
    setFavoriteList(filteredFavorites);
    updateTask({
      ...taskList.filter((task) => task.id === id),
      isFavorite: false,
    }); // Update task in taskList
  };

  const isTaskFavorited = (id) => {
    let filteredFavorites = favoriteList.filter((task) => task.id === id);
    console.log(filteredFavorites);
    if (filteredFavorites) {
      return filteredFavorites.isFavorite;
    }
  };

  const values = {
    taskList,
    setTaskList,
    addTask,
    removeTask,
    updateTask,
    // sortByName,
    pinToFavorites,
    removeFromFavorites,
    isTaskFavorited,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
