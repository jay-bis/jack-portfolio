import React from "react";
import Logo from "../../static/svg/jb-logo.svg";
import Layout from "../layout";
import profPic from "../../static/images/prof_pic.jpeg";

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
                rocking climbing, hiking, and camping. If you need a website built, want to collaborate on any type of tech project, or would
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
      </Layout>
    );
}
