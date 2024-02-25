import "./App.css";
import AppContextProvider from "./context/AppContext";
import DialogContextProvider from "./context/DialogContext";
import TaskBoard from "./components/TaskBoard";
import Header from "./components/Header";
import SimpleDialog from "./components/SimpleDialog";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  // const theme = localStorage.getItem("presetTheme");
  // const styles = {
  //   color: theme ? 'green' : 'red',
  //   fontSize: 20,
  // };
  console.log("owner", process.env.REACT_APP_OWNER);
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <DialogContextProvider>
          <div className="App">
            <Header />
            <TaskBoard />
            <SimpleDialog />
          </div>
        </DialogContextProvider>
      </AppContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
