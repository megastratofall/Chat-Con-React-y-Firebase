import "./App.css";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main.jsx";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";

function App() {
  const [{ isopen, user }, dispatch] = useStateValue();

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
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className={`app__central ${isopen ? "displayed" : ""}`}>
          <Sidebar />
          <Main />
        </div>
      )}
      <Login />
    </div>
  );
}

export default App;
