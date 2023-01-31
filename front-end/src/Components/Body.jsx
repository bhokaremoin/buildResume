import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Resume from "./Resume";
import styles from "./Styles/Body.module.css";
import Editor from "./Editor";
import { useGlobalContext } from "../contextAPI";
const Body = () => {
  const { colors, activeColor, setActiveColor } = useGlobalContext();
  const resumeRef = useRef();
  return (
    <div className={styles.container}>
      <div style={{ alignContent: "center" }}>
        <p className={styles.heading}>Resume Builder</p>
      </div>
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
    </div>
  );
};

export default Body;
