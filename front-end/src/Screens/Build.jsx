import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
const Build = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar key="buildnav" />
      <Body />
    </div>
  );
};

export default Build;
