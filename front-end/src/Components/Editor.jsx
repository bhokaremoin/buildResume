// eslint-disable-next-line
import React from "react";
import { useState, useEffect } from "react";
import { X } from "react-feather";
import { useGlobalContext } from "../contextAPI";
import InputControl from "./InputControl";
import styles from "./Styles/Editor.module.css";
import EducationBody from "./Sections/EducationBody";
import ProjectBody from "./Sections/ProjectBody";
import WorkExpBody from "./Sections/WorkExpBody";
import BasicInfoBody from "./Sections/BasicInfoBody";
import AchievementsBody from "./Sections/AchievementsBody";
import OtherBody from "./Sections/OtherBody";
import handleSubmission from "./handleSubmission";
function Editor() {
  const { sections, information, setInformation, values, setValues } =
    useGlobalContext();
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return <BasicInfoBody />;
      case sections.workExp:
        return <WorkExpBody />;
      case sections.project:
        return <ProjectBody />;
      case sections.education:
        return <EducationBody />;
      case sections.achievement:
        return <AchievementsBody />;
      case sections.other:
        return <OtherBody />;
      default:
        return null;
    }
  };
  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details ? activeInfo.details[0]?.college || "" : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSectionKey]);
  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [information]);
  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDetailIndex]);
  useEffect(() => {
    handleSubmission({
      sectionTitle,
      activeDetailIndex,
      activeSectionKey,
      sections,
      values,
      information,
      setInformation,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            key={key}
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl
          lable="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {generateBody()}
      </div>
    </div>
  );
}

export default Editor;
