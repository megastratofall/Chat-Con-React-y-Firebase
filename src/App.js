import "./App.css";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main.jsx";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  const [{ isopen, user, darkMode }, dispatch] = useStateValue();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  //useEffect admite 2 parámetros, funcion flecha + array, cada vez q se refresque se va a ejecutar la funcion
  useEffect(() => {
    //cada vez q cambie el usuario ejecuta lo q hay dentro.
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <>
          <Header />
          <Login />
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <div className={`app__central ${isopen ? "displayed" : ""}`}>
              <Sidebar />
              <Main />
            </div>
          </ThemeProvider>
        </>
      )}
    </div>
  );
}

export default App;
