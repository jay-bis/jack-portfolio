import React from "react";
import Logo from "../../static/svg/jb-logo.svg";
import Layout from "../layout";
import profPic from "../../static/images/prof_pic.jpeg";
import codePic from "../../static/images/code.jpg";
import chiPic from "../../static/images/chicago.jpg";
import coronaPic from "../../static/images/corona.png";
import book from "../../static/images/book.png";
import music from "../../static/images/music.png";
import github from "../../static/images/github.png";
import ProjectItem from "../components/ProjectItem/index";

import './animateLogo.scss';
import './containers.scss';

export default function Home() {
  return (
      <Layout>
        <div>
            <h1 className="flux1" >
              Jack
            </h1>
            <h1 className="flux2">
              Biscupski
            </h1>
          </div>
          <div className="horizontal-container">
            <div className="vertical-container">
              <h1 className="h1-container">About Me</h1>
              <h3 style={{ textAlign: "left" }}>
                I care about elegant, stylized web solutions and functional aesthetics. I'm constantly learning new web technologies
                in order to have a fully-realized toolkit that can assist others in creating the websites that they need. For example,
                this website was built with React, GatsbyJS, and SCSS! I also have a strong interest in data visualization, data engineering,
                machine learning, IoT, the environment, and the intersection between all of the above. Besides my career interests, some of
                my hobbies include writing short stories and poetry, learning to play guitar and writing my own songs, cycling, mountain biking,
                rock climbing, hiking, and camping. If you need a website built, want to collaborate on any type of tech project, or would
                just like to chat, feel free to contact me at any of the links under my picture! 
              </h3>
              <Logo className="floating" />
            </div>
            <div className="vertical-container">
              <div className="prof-pic-container prof-pic-lvl4">
                <img className="prof-pic" src={profPic} alt="Profile" />
              </div>
              <div className="horizontal-container">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-biscupski-973714148/">LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jay-bis">GitHub</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jack.biscupski/">Facebook</a>
              </div>
            </div>
          </div>
          <h1 className="flux1 phone-margin" style={{ marginBottom: '75px' }}>
            Portfolio
          </h1>
          <div className="horizontal-container-left mobile-horz-container">
            <div className="vertical-container">
              <ProjectItem imgPath={codePic}/>
              <a className="spacing" target="_blank" rel="noopener noreferrer" href="https://github.com/jay-bis/jack-portfolio">This Website!</a>
            </div>
            <h3 className="proj-desc-container-left">
              Learned some GatsbyJS to make/deploy this site!
              <div className="empty-container" />
              Finding a consistent, interesting theme was hard but rewarding.
              <div className="empty-container" />
              Had a bit too much fun doodling out possible designs for my logo while developing.
              <div className="empty-container" />
              Styled components held a cold, hard grip on me going into this project, but SCSS proved itself very worthwhile while tinkering with the background of the site.
            </h3>
          </div>

          <div className="horizontal-container-left mobile-horz-container">
            <div className="vertical-container">
              <ProjectItem imgPath={chiPic} />
              <a className="spacing" target="_blank" rel="noopener noreferrer" href="https://github.com/jay-bis/nba-viz">NBA   Visualizations</a>
            </div>
            <h3 className="proj-desc-container-left">
              My first foray into any backend development intertwined with data visualizations.
              <div className="empty-container" />
              A project that combined a few of my passions - data viz, web development, and basketball!
              <div className="empty-container" />
              I love basketball.
              <div className="empty-container" />
              No, seriously. Name a court and a time, and I'll be there. Bring your ankle braces.
            </h3>
          </div>

          <div className="horizontal-container-left mobile-horz-container">
            <div className="vertical-container">
              <ProjectItem imgPath={coronaPic} />
              <a className="spacing" target="_blank" rel="noopener noreferrer" href="https://github.com/jay-bis/future-covid-data">CoronaVision</a>
            </div>
            <h3 className="proj-desc-container-left">
              A React app I worked on for a Devpost hackathon to create tech solutions for our current pandemic.
              <div className="empty-container" />
              I collaborated with a global team working on the frontend of the site, while other teammates worked on the backend/predictive/modelling portions of the site.
              <div className="empty-container" />
              It was taxing getting everything developed and deployed in two days, but ultimately very fulfulling.
            </h3>
          </div>
          <h1 className="flux2 phone-margin" style={{ marginBottom: '75px' }}>
            ...And More (on GitHub!)
          </h1>
          <div style={{ alignItems: 'baseline' }} className="horizontal-container mobile-horz-flex-container">
            <div className="vertical-container icon-container">
              <img className="icon" src={book} alt="book" />
              <a href="https://www.wattpad.com/user/jbiscupski" className="spacing" target="_blank" rel="noopener noreferrer">Writing Portfolio</a>
            </div>
            <div className="vertical-container icon-container">
              <img className="icon" src={music} alt="music" />
              <a href="https://www.bandlab.com/jbiscupski" className="spacing" target="_blank" rel="noopener noreferrer">Music Portfolio</a>
            </div>
            <div className="vertical-container icon-container">
              <img className="icon" src={github} alt="github icon" />
              <a href="https://github.com/jay-bis" className="spacing" target="_blank" rel="noopener noreferrer">Code Portfolio</a>
            </div>
          </div>
      </Layout>
    );
}
