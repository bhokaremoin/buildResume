import React, { useEffect, useState, useRef, forwardRef } from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import styles from "./Styles/Resume.module.css";
import { useGlobalContext } from "../contextAPI";
const ResumeListElement = (information) => {
  const { sections } = useGlobalContext();
  // const information = information;
  const [columns, setColumns] = useState([[], []]);
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };
  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"wrokExp"}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className="styles item" key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  {getFormattedDate(item.startDate) -
                    getFormattedDate(item.endDate)}{" "}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  {" "}
                  <MapPin />
                  Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((ele, index) => (
                    <li className={styles.point} key={ele + index}>
                      {ele}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>Some college name</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
        <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>
        <div className={styles.links}>
          {info.basicInfo?.detail?.email ? (
            <a type="email" className={styles.link}>
              <AtSign />
              {info.basicInfo?.detail?.email}
            </a>
          ) : (
            <span />
          )}
          {info.basicInfo?.detail?.phone ? (
            <a className={styles.link}>
              <Phone /> {info.basicInfo?.detail?.phone}
            </a>
          ) : (
            <span />
          )}
          {info.basicInfo?.detail?.linkedin ? (
            <a className={styles.link}>
              <Linkedin /> {info.basicInfo?.detail?.linkedin}
            </a>
          ) : (
            <span />
          )}
          {info.basicInfo?.detail?.github ? (
            <a className={styles.link}>
              <GitHub /> {info.basicInfo?.detail?.github}
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>
          {columns[0].map((item) => sectionDiv[item])}
        </div>
        <div className={styles.col2}>
          {columns[1].map((item) => sectionDiv[item])}
        </div>
      </div>
    </div>
  );
};

export default ResumeListElement;
