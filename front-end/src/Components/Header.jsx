import React, { useState } from "react";
import { Link } from "react-router-dom";
import resumeSvg from "../Utils/resume.svg";
import styles from "./Styles/Header.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const handleOpenLogin = () => setLoginModal(true);
  const handleCloseLogin = () => setLoginModal(false);

  const [signUpModal, setSignUpModal] = useState(false);
  const handleOpenSignUp = () => setSignUpModal(true);
  const handleCloseSignUp = () => setSignUpModal(false);
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
            {/* <Link className={styles.btn} to="/login">
              Login
            </Link> */}
            <Button onClick={handleOpenLogin}>Login</Button>{" "}
            <Button onClick={handleOpenSignUp}>Sign Up</Button>{" "}
            {/* <Link className={styles.btn} to="/signup">
              Sign Up
            </Link> */}
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
      <Modal
        open={loginModal}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login handleClose={handleCloseLogin} />
        </Box>
      </Modal>
      <Modal
        open={signUpModal}
        onClose={handleCloseSignUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Signup handleClose={handleCloseSignUp} />
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
