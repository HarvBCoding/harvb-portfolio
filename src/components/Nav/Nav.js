import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {  Tabs, Tab } from '@mui/material';
import "./css/Nav.css";

const StyledTabs = styled((props) => (
  <Tabs 
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
)) ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--darker-purple)",
    "& .MuiTabs-indicatorSpan": {
     backgroundColor: "transparent"
    }
  }
})

function LinkTab(props) {
    return (
        <Tab
          component="a"
          onClick={(event) => {
              event.preventDefault();
          }}
          {...props} />
    )
}

const StyledLink = styled((props) => 
  <LinkTab {...props} />)(
    ({ theme }) => ({
      fontFamily: "Give You Glory",
      fontWeight: "Bold",
      color: "#8550C0",
      "&.Mui-selected": {
        color: "var(--darker-purple)",
        fontWeight: "Bold"
      }
    })
  )

function NavTabs(props) {
  const { sections = [], currentSection, setCurrentSection } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <header>
      <nav>
        <StyledTabs centered className="navigation" value={value} onChange={handleChange} aria-label="nav tabs">
            {sections.map((section) => (
                <StyledLink key={section.name} label={section.name} href={`#${section.name}`} className={`${currentSection.name === section.name && 'navActive'} nav-tabs`} sx={{px: 6}} onClick={() => {
                    setCurrentSection(section);
                }}/>
            ))}
        </StyledTabs>
      </nav>
    </header>
  );
}

export default NavTabs;
