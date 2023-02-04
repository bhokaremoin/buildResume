import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ResumeListElement from "../Components/ResumeListElement";

const ResumeList = () => {
  const [resumeList, setResumeList] = useState([]);
  const fetchMyData = async () => {
    await fetch("http://localhost:5000/api/getResumeList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      const response = await res.json();
      await setResumeList(response);
    });
  };
  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {resumeList !== {}
          ? Array(resumeList.resumeList).map((item) => {
              return item
                ? item.map((data, index) => {
                    return <ResumeListElement key={index} information={data} />;
                  })
                : "";
            })
          : ""}
      </div>
    </div>
  );
};

export default ResumeList;
