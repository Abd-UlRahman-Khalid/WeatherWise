import React from "react";
import me from "../../assets/me.jpg";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="me flex mt-5  mx-10">
        <div className="pic   border-t-4 border-l-4  border-[#88B25E] overflow-hidden ">
          <img
            src={me}
            alt="Profile pic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="me-text mt-5 ml-5">
          <h2 className="text-4xl text-[#88B25E]">Abd-UlRahman Khalid</h2>
          <p className="text-xl text-[#928888]">Front-End Developer</p>
        </div>
      </div>

      <div className="about-content m-10 text-[#928888]">
        <p>
          Hi, my name is Abd-UlRahman Khalid, and I'm a passionate front-end
          developer with a strong background in UI/UX design and graphic design.
          I specialize in creating visually appealing and user-friendly web
          applications using technologies like
          <span> HTML</span> ,<span>CSS</span> ,<span>JavaScript</span>, and
          <span> React</span> .
          <br />
          <br />
          I've worked on a variety of projects, including my
          WeatherApp_Capstone_Project, which I built using React, and the
          Route-JS-API-WeatherApp, where I utilized JavaScript and Bootstrap to
          create an interactive weather app. On GitHub, you'll also find my
          projects like Route-CRUD-Bookmark and Route-LoginSystem-Assignment,
          where I focused on CRUD operations, data validation, and LocalStorage
          to enhance user functionality.
          <br />
          <br /> I'm currently completing the ALX Front-End Developer Track and
          learning full-stack development at Route Academy, with plans to expand
          my expertise to frameworks like Angular. My certifications from Google
          UX Design and ALX have equipped me with skills in wireframing, UX
          research, and Agile methodologies, helping me bridge the gap between
          design and development.
          <br />
          <br /> One of my proudest contributions was working on the MuslimDo
          graphic design, where I helped create clean, intuitive interfaces. I
          love solving problems and bringing ideas to life while ensuring an
          engaging user experience. I'm always eager to learn new technologies,
          tackle challenging projects, and grow as a developer. I look forward
          to contributing to meaningful projects that make a difference!
        </p>
        <div className="contact mt-10 text-[#928888]">
          <div>
            🌐 <strong>GitHub:</strong>
            <a
              href="https://github.com/Abd-UlRahman-Khalid"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Abd-UlRahman-Khalid
            </a>
          </div>
          <div>
            🔗 <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/abd-ulrahman-khalid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/abd-ulrahman-khalid/
            </a>
          </div>
          <div>
            🎨 <strong>Behance:</strong>
            <a
              href="https://www.behance.net/akhalid1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.behance.net/akhalid1
            </a>
          </div>
          <div>
            📧 <strong>Email:</strong>
            <a href="mailto:a.khalid5322@gmail.com"> a.khalid5322@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
