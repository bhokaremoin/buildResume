import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import resumeSvg from "../Utils/resume.svg";
import resumeSvg from "../Utils/online_cv.svg";
import styles from "./Styles/Header.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import { useGlobalContext } from "../contextAPI";
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
  const { sections, setInformation } = useGlobalContext();
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  const handleOpenLogin = () => setLoginModal(true);
  const handleCloseLogin = () => setLoginModal(false);

  const [signUpModal, setSignUpModal] = useState(false);
  const handleOpenSignUp = () => setSignUpModal(true);
  const handleCloseSignUp = () => setSignUpModal(false);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setInformation({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {},
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: [],
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: [],
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: [],
      },
      [sections.achievement]: {
        id: sections.achievement,
        sectionTitle: sections.achievement,
        points: [],
      },
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: "",
      },
    });
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Build</span> Resume
        </p>
        <div className={styles.type}>
          <p className={styles.heading1}>
            Build Your <span>Resume</span> Now
          </p>
        </div>
        {!localStorage.getItem("authToken") ? (
          <div className={styles.btnSection}>
            {/* <Link className={styles.btn} to="/login">
              Login
            </Link> */}
            <Button
              variant="contained"
              size="large"
              sx={{ m: 2, fontSize: 20, bgcolor: "#6c63ff" }}
              onClick={handleOpenLogin}
            >
              Login
            </Button>{" "}
            <Button
              variant="outlined"
              // color="#6c63ff"
              sx={{ m: 2, fontSize: 20, color: "#6c63ff" }}
              onClick={handleOpenSignUp}
              size="large"
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <div className={styles.btnSection}>
            <Button
              variant="contained"
              className={styles.btn}
              size="large"
              sx={{ m: 2, fontSize: 20 }}
              onClick={() => navigate("/build")}
            >
              Build Resume
            </Button>
            <Button
              variant="outlined"
              className={styles.btn}
              sx={{ m: 2, fontSize: 20 }}
              size="large"
              onClick={handleLogout}
            >
              Logout
            </Button>
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
          <Login
            handleClose={handleCloseLogin}
            handleOpenSignUp={handleOpenSignUp}
          />
        </Box>
      </Modal>
      <Modal
        open={signUpModal}
        onClose={handleCloseSignUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Signup
            handleClose={handleCloseSignUp}
            handleOpenLogin={handleOpenLogin}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
