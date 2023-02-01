import React from "react";
import { Link } from "react-router-dom";
import resumeSvg from "../Utils/resume.svg";
import styles from "./Styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's Free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="resume-svg" />
      </div>
      {!localStorage.getItem("authToken") ? (
        <div>
          <Link to="/login">Login</Link> <Link to="/signup">Sign Up</Link>
        </div>
      ) : (
        <div>
          <Link to="/build">Build Resume</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
