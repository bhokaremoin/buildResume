import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const [activeColor, setActiveColor] = useState(colors[0]);
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const [information, setInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  // const [values, setValues] = useState({
  //   name: activeInformation?.detail?.name || "",
  //   title: activeInformation?.detail?.title || "",
  //   linkedin: activeInformation?.detail?.linkedin || "",
  //   github: activeInformation?.detail?.github || "",
  //   phone: activeInformation?.detail?.phone || "",
  //   email: activeInformation?.detail?.email || "",
  // });
  const [values, setValues] = useState({
    name: "",
    title: "",
    linkedin: "",
    github: "",
    phone: "",
    email: "",
  });
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) {
      tempValues.points = [];
    }
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  return (
    <AppContext.Provider
      value={{
        colors,
        activeColor,
        setActiveColor,
        sections,
        information,
        setInformation,
        values,
        setValues,
        handlePointUpdate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
