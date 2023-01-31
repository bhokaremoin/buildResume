const handleSubmission = (props) => {
  const {
    sections,
    values,
    information,
    setInformation,
    sectionTitle,
    activeDetailIndex,
    activeSectionKey,
  } = props;
  switch (sections[activeSectionKey]) {
    case sections.basicInfo: {
      const tempDetail = {
        name: values.name,
        title: values.title,
        linkedin: values.linkedin,
        github: values.github,
        email: values.email,
        phone: values.phone,
      };

      setInformation((prev) => ({
        ...prev,
        [sections.basicInfo]: {
          ...prev[sections.basicInfo],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.workExp: {
      const tempDetail = {
        certificationLink: values.certificationLink,
        title: values.title,
        startDate: values.startDate,
        endDate: values.endDate,
        companyName: values.companyName,
        location: values.location,
        points: values.points,
      };
      const tempDetails = [...information[sections.workExp]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      setInformation((prev) => ({
        ...prev,
        [sections.workExp]: {
          ...prev[sections.workExp],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.project: {
      const tempDetail = {
        link: values.link,
        title: values.title,
        overview: values.overview,
        github: values.github,
        points: values.points,
      };
      const tempDetails = [...information[sections.project]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      setInformation((prev) => ({
        ...prev,
        [sections.project]: {
          ...prev[sections.project],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.education: {
      const tempDetail = {
        title: values.title,
        college: values.college,
        startDate: values.startDate,
        endDate: values.endDate,
      };
      const tempDetails = [...information[sections.education]?.details];
      tempDetails[activeDetailIndex] = tempDetail;

      setInformation((prev) => ({
        ...prev,
        [sections.education]: {
          ...prev[sections.education],
          details: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.achievement: {
      const tempPoints = values.points;

      setInformation((prev) => ({
        ...prev,
        [sections.achievement]: {
          ...prev[sections.achievement],
          points: tempPoints,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.summary: {
      const tempDetail = values.summary;

      setInformation((prev) => ({
        ...prev,
        [sections.summary]: {
          ...prev[sections.summary],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.other: {
      const tempDetail = values.other;

      setInformation((prev) => ({
        ...prev,
        [sections.other]: {
          ...prev[sections.other],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
    default:
      return null;
  }
};
export default handleSubmission;
