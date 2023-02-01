import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
const Build = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default Build;
