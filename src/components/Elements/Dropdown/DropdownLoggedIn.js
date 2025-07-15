import { useNavigate } from "react-router-dom";
import "./Css/DropdownLoggedIn.css";

export const DropdownLoggedIn = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div className="dropdown-loggedin bg-white position-absolute p-2 mt-1">
        <ul className="ps-0 mb-0">
            <li>R. Jadeja's Profile</li>
            
            <li>Wishlist</li>

            <li>Order History</li>

            <li onClick={handleLogout}>Logout</li>            
        </ul>
    </div>
  )
}