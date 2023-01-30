import React from "react";
import { useGlobalContext } from "../../contextAPI";
import InputControl from "../InputControl";
import styles from "../Styles/Editor.module.css";
const SummaryBody = () => {
  const { values, setValues } = useGlobalContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
};

export default SummaryBody;
