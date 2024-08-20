import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import images from "../../assets/images/Me.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={images}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am Firas Hakima, a dedicated and passionate software engineering student in my final year at EPI Digital School in Sousse, Tunisia. With a solid foundation in software development and a strong focus on digitalization, I am eager to apply my technical skills to real-world challenges. My academic journey, combined with hands-on experience during my internships in MERN stack development, has equipped me with the expertise to create innovative and user-centric digital solutions. Fluent in both English and French, I have a keen interest in UI/UX design, which allows me to merge functionality with aesthetics in web development. I am currently seeking apprenticeship opportunities that will enable me to further refine my skills and contribute to impactful projects. With a proactive mindset and a deep commitment to continuous learning, I am ready to make a meaningful contribution to the field of IT and digital solutions.


              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
