import React, { useState } from "react";
import { Tabs, Tab } from '@mui/material';

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
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
            {sections.map((section) => (
                <LinkTab label={section.name} href={`#${section.name}`} className={`mx-2 ${currentSection.name === section.name && 'navActive'}`} onClick={() => {
                    setCurrentSection(section);
                }}/>
            ))}
        </Tabs>
      </nav>
    </header>
  );
}

export default NavTabs;
