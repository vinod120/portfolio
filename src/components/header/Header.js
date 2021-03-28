import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  openSource,
  educationInfo,
  bigProjects,
  contactInfo,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const education = educationInfo.display;
  const projects = bigProjects.display;
  const contact = contactInfo.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {education && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {/* {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )} */}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {projects && (
            <li>
              <a href="#opensource">Projects</a>
            </li>
          )}
          {/* {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )} */}
          {/* {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )} */}
          {/* {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )} */}
          
          {contact && (
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          )}
          <li>
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
