import React from "react";
import { useGlobalContext } from "../../contextAPI";
import InputControl from "../InputControl";
import styles from "../Styles/Editor.module.css";
const OtherBody = () => {
  const { values, setValues } = useGlobalContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        value={values.other}
        placeholder="Enter something"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );
};

export default OtherBody;
