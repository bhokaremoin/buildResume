import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ResumeListElement from "../Components/ResumeListElement";
import { useGlobalContext } from "../contextAPI";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ResumeList = () => {
  const navigate = useNavigate();
  const { sections, setInformation } = useGlobalContext();
  const [resumeList, setResumeList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const handleDelete = () => {
    console.log("delete");
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
                          // onClick={() => handleClick(data)}
                        >
                          <Button onClick={handleOpen}>Delete</Button>
                          <Button onClick={() => handleClick(data)}>
                            Edit
                          </Button>
                          <ResumeListElement key={index} information={data} />
                        </Grid>
                      );
                    })
                  : "";
              })
            : ""}
        </Grid>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete This Resume
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to delete this resume prementaly
          </Typography>
          <Button onClick={() => handleDelete()}>Delete</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ResumeList;
