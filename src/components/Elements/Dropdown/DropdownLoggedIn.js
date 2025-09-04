import { Link, useNavigate } from "react-router-dom";
import "./Css/DropdownLoggedIn.css";
import { useAuth } from "../../../context/AuthContext";

export const DropdownLoggedIn = () => {

  const navigate = useNavigate();
  const { logout, user } = useAuth(); // ✅ Access logout and user from context

  const handleLogout = () => {
    logout();           // Clears token & user
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dropdown-loggedin bg-white position-absolute p-2 mt-1">
        <ul className="ps-0 mb-0">
            <li><Link to="/profile">{user.name}</Link></li>
            
            <li><Link to={'/wishlist'}>Wishlist</Link></li>

            <li><Link to={'/order-history'}>Order History</Link></li>

            <li onClick={handleLogout}>Logout</li>            
        </ul>
    </div>
  )
}