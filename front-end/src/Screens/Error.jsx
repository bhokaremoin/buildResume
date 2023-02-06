import React from "react";
import Button from "@mui/material/Button";
import styles from "./Styles/Error.module.css";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.body}>
      <p className={styles.p}>
        HTTP: <span>404</span>
      </p>
      <code>
        <span>this_page</span>.<em>not_found</em> = true;
      </code>
      <code>
        <span>if</span> (<b>you_spelt_it_wrong</b>) &#123;
        <span>try_again()</span>;&#125;
      </code>
      <code>
        <span>
          else if (<b>we_screwed_up</b>)
        </span>{" "}
        &#123;<em>alert</em>(<i>"We're really sorry about that."</i>);{" "}
        <span>window</span>.<em>location</em> = home;&#125;
      </code>
      <center>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
      </center>
    </div>
  );
};

export default Error;
