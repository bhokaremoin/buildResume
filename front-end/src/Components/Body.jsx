import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Resume from "./Resume";
import styles from "./Styles/Body.module.css";
import Editor from "./Editor";
import { useGlobalContext } from "../contextAPI";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  const { colors, activeColor, setActiveColor, information, sections } =
    useGlobalContext();
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
      summary: information[sections.summary],
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
        <div className={styles.colors}>
          {colors.map((item) => {
            return (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`${styles.color} ${
                  activeColor === item ? styles.active : ""
                }`}
                onClick={() => setActiveColor(item)}
              />
            );
          })}
        </div>
        {/* download */}
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor />
        <Resume ref={resumeRef} activeColor={activeColor} />
      </div>
      <div>
        <button onClick={saveResume}>Save Resume</button>
      </div>
    </div>
  );
};

export default Body;
