import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import DownloadIcon from "@mui/icons-material/Download";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Resume from "./Resume";
import styles from "./Styles/Body.module.css";
import Editor from "./Editor";
import { useGlobalContext } from "../contextAPI";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
const Body = () => {
  const navigate = useNavigate();
  const { activeColor, information, sections } = useGlobalContext();
  const resumeRef = useRef();
  const saveResume = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");
    const info = {
      workExp: information[sections.workExp],
      project: information[sections.project],
      achievement: information[sections.achievement],
      education: information[sections.education],
      basicInfo: information[sections.basicInfo],
      other: information[sections.other],
    };
    let response = await fetch("http://localhost:5000/api/saveResume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        resumeDetails: info,
      }),
    });
    if (response.status === 200) {
      navigate("/resumelist");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.btn}>
          <ReactToPrint
            trigger={() => {
              return (
                <Button
                  variant="contained"
                  size="small"
                  sx={{ ml: 2 }}
                  startIcon={<DownloadIcon />}
                >
                  Download
                </Button>
              );
            }}
            content={() => resumeRef.current}
          />
          <div>
            <Button
              variant="outlined"
              onClick={saveResume}
              size="small"
              sx={{ mr: 2 }}
              startIcon={<SaveIcon />}
            >
              Save Resume
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Editor />
          </Grid>
          <Grid item xs={12} md={6}>
            <Resume key="x" ref={resumeRef} activeColor={activeColor} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Body;
