import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ResumeListElement from "../Components/ResumeListElement";
import { useGlobalContext } from "../contextAPI";
const ResumeList = () => {
  const navigate = useNavigate();
  const { sections, setInformation } = useGlobalContext();
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
  const handleClick = (data) => {
    console.log(data);
    setInformation({
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: data.basicInfo.detail,
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: data.workExp.details,
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: data.project.details,
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: data.education.details,
      },
      [sections.achievement]: {
        id: sections.achievement,
        sectionTitle: sections.achievement,
        points: data.achievement.points,
      },
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: data.other.detail,
      },
    });
    navigate("/build");
  };
  return (
    <div>
      <Navbar />
      <div>
        <Grid container spacing={2}>
          {resumeList !== {}
            ? Array(resumeList.resumeList).map((item) => {
                return item
                  ? item.map((data, index) => {
                      return (
                        <Grid
                          key={index}
                          item
                          xs={6}
                          onClick={() => handleClick(data)}
                        >
                          <ResumeListElement key={index} information={data} />
                        </Grid>
                      );
                    })
                  : "";
              })
            : ""}
        </Grid>
      </div>
    </div>
  );
};

export default ResumeList;
