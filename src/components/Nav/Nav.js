import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";
import "./css/Nav.css";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    backgroundColor: "var(--darker-purple)",
    "& .MuiTabs-indicatorSpan": {
      backgroundColor: "transparent",
    }
  },
  "& .MuiTabs-root": {
    position: 'absolute',
    right: '0'
  }
});

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const StyledLink = styled((props) => <LinkTab {...props} />)(({ theme }) => ({
  fontFamily: "Give You Glory",
  fontWeight: "Bold",
  color: "#8550C0",
  "&.Mui-selected": {
    color: "var(--darker-purple)",
    fontWeight: "Bold",
  },
}));

function NavTabs() {
  const [sections] = useState([
    {
      name: "About",
      link: "about",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Resume",
      link: "resume",
    },
    {
      name: "Contact Me",
      link: "contactme",
    },
  ]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <nav>
        <StyledTabs
          centered
          className="navigation"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          {sections.map((section) => (
            <StyledLink
              key={section.name}
              label={section.name}
              href={`/${section.link}`}
              className={`${section.name && "navActive"} nav-tabs`}
              sx={{ px: 6 }}
            />
          ))}
        </StyledTabs>
      </nav>
    </header>
  );
}

export default NavTabs;
