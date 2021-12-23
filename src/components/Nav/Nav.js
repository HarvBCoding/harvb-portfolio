import React from "react";

function Nav(props) {
  const { sections = [], currentSection, setCurrentSection } = props;

  return (
      <header>
          <nav>
              <ul className="flex-row">
                 {sections.map((section) => (
                     <li className={`mx-2 ${currentSection.name === section.name && 'navActive'}`} key={section.name}>
                         <a href={`#${section.name}`} onClick={() => {
                             setCurrentSection(section);
                         }}>
                             {section.name}
                         </a>
                     </li>
                 ))}
              </ul>
          </nav>
      </header>
  )
}

export default Nav;