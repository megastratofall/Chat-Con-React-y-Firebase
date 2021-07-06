import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useStateValue } from "../Stateprovider";
import { actionTypes } from "../reducer.js";

const Header = () => {
  const [{ isopen, user }, dispatch] = useStateValue();
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
        <Avatar src={user?.photoURL}/> 
      </div>
    </div>
  );
};

export default Header;
