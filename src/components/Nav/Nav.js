import React, { useState } from "react";
import {  Tabs, Tab } from '@mui/material';
// import "./css/Nav.css";


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

function NavTabs(props) {
  const { sections = [], currentSection, setCurrentSection } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <header>
      <nav>
        <Tabs centered className="navigation" value={value} onChange={handleChange} aria-label="nav tabs">
            {sections.map((section) => (
                <LinkTab key={section.name} label={section.name} href={`#${section.name}`} className={`${currentSection.name === section.name && 'navActive'} nav-tabs`} sx={{px: 6}} onClick={() => {
                    setCurrentSection(section);
                }}/>
            ))}
        </Tabs>
      </nav>
    </header>
  );
}

export default NavTabs;
