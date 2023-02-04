import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Styles/Navbar.module.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.headingDiv} to="/">
          <h2 className={styles.heading}>build Resume</h2>
        </Link>
      </div>
      <div className={styles.right}>
        <Link className={styles.myResume} to="/resumelist">
          My Resumes
        </Link>
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
