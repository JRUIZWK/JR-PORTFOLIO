import "./aboutMe.scss"

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="abtm-title-ctn">  
      <h1>About Me</h1>
      </div>
      <p className="aboutme-info">A Software Engineer with a background in Quality Assurance. I have a passion for creating full stack web applications from the ground up. I enjoy solving challenging and complex problems, and am very enthusiastic for a challenge that brings the best out of me.
</p>
      <h2>Skills Learned</h2>
      <hr />
      <div className="skills-container-1">
        <div className="skill-detail">Javascript</div>
        <div className="skill-detail">Python</div>
        <div className="skill-detail">HTML</div>
        <div className="skill-detail">CSS</div>
        <div className="skill-detail">SQL</div>
      </div>
      <div className="skills-container-2">
        <div className="skill-detail">Mongoose</div>
        <div className="skill-detail">MongoDB</div>
        <div className="skill-detail">Express</div>
        <div className="skill-detail">React</div>
        <div className="skill-detail">Node.js</div>
      </div>
      <div className="skills-container-2">
        <div className="skill-detail">Flask</div>
        <div className="skill-detail">Bootstrap</div>
        <div className="skill-detail">Django</div>
        <div className="skill-detail">EJS</div>
        <div className="skill-detail">PostgreSQL</div>
      </div>
      <div className="skills-container-2">
        <div className="skill-detail">Git</div>
        <div className="skill-detail">Virtual Studio Code</div>
        <div className="skill-detail">Heroku</div>
        <div className="skill-detail">Chart JS</div>
        <div className="skill-detail">Conda</div>
      </div>

    </div>
  )
}