import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div>
      <div>
        <Link to="/">
          <h2>build Resume</h2>
        </Link>
      </div>
      <div>
        <Link to="/resumelist">My Resumes</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
