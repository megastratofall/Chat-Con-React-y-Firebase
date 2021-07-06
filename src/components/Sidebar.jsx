import "./Sidebar.css";
import { useStateValue } from "../Stateprovider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <h4>Welcome</h4>
      <h4>{user?.displayName}</h4>
    </div>
  );
};

export default Sidebar;
