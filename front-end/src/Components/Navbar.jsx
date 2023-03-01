import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextAPI";
const pages = ["My Resume", "Editor", "About Us"];
const Navbar = () => {
  const { sections, setInformation } = useGlobalContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handlePageClick = (page) => {
    if (page === pages[0]) {
      navigate("/resumelist");
    } else if (page === pages[1]) {
      navigate("/build");
    } else {
      navigate("/aboutus");
    }
  };
  const navigate = useNavigate();
  const handleLogout = (e) => {
    // e.preventDefault();
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setInformation({
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
      [sections.other]: {
        id: sections.other,
        sectionTitle: sections.other,
        detail: "",
      },
    });
    navigate("/");
  };
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#6c63ff", mb: 3 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 2,
                mr: 6,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: 35,
              }}
            >
              Build Resume
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => {
                  if (
                    page === pages[0] &&
                    window.location.href.slice(22) === "resumelist"
                  ) {
                    return <span key={index} />;
                  }
                  if (
                    page === pages[1] &&
                    window.location.href.slice(22) === "build"
                  ) {
                    return <span key={index} />;
                  }
                  if (
                    page === pages[2] &&
                    window.location.href.slice(22) === "aboutus"
                  ) {
                    return <span key={index} />;
                  }
                  return (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                ml: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: 35,
              }}
            >
              Build Resume
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => {
                if (
                  page === pages[0] &&
                  window.location.href.slice(22) === "resumelist"
                ) {
                  return <span key={index} />;
                }
                if (
                  page === pages[1] &&
                  window.location.href.slice(22) === "build"
                ) {
                  return <span key={index} />;
                }
                if (
                  page === pages[2] &&
                  window.location.href.slice(22) === "aboutus"
                ) {
                  return <span key={index} />;
                }
                return (
                  <Button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    sx={{ my: 2, color: "white", display: "block", m: 2 }}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>
            <Button
              variant="contained"
              sx={{ bgcolor: "white", color: "gray", p: 0, pr: 1, pl: 1 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
