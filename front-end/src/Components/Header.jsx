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
        {!localStorage.getItem("authToken") ? (
          <div className={styles.btnSection}>
            <Link className={styles.btn} to="/login">
              Login
            </Link>{" "}
            <Link className={styles.btn} to="/signup">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className={styles.btnSection}>
            <Link className={styles.btn} to="/build">
              Build Resume
            </Link>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="resume-svg" />
      </div>
    </div>
  );
};

export default Header;
