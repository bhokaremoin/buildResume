import React from "react";
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
    </div>
  );
};

export default Header;
