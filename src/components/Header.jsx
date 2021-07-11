import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Button, Switch } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useStateValue } from "../Stateprovider";
import { actionTypes } from "../reducer.js";
import { auth } from "../firebase";

const Header = () => {
  const [{ isopen, user, darkMode }, dispatch] = useStateValue();
  const signout = () => {
    auth.signOut().then((user) =>
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
    );
  };
  const toggleMenu = () => {
    dispatch({
      type: actionTypes.TOGGLE_MENU,
      isopen: !isopen,
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="header__right">
        <Avatar src={user?.photoURL} />
        <Switch
          checked={darkMode}
          onChange={() => {
            dispatch({
              type: actionTypes.SET_DARKMODE,
              darkMode: !darkMode,
            });
          }}
        />
        {/* si existe user muestra el botón, si no, no lo muestres. */}
        {user && (
          <Button onClick={signout} variant="contained">
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
