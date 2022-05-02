import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        2022 React Project
      </span>
      <span>SEE GITHUB CODE</span>
      <a href="https://github.com/honneyjung/movie_app_2022.git" class="git_movie" target="_blank">
        <button>GITHUB</button>
      </a>
    </div>
  );
}

export default About;
