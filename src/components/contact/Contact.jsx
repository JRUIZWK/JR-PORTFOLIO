import "./contact.scss";
import { ExternalLink } from "react-external-link";

export default function Contact() {
  
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <hr />
      <div className="logo-container">
        <ExternalLink href="https://www.linkedin.com/in/jruizwk/">
        <img src="assets/linkedin-blk.png" alt="" />
        </ExternalLink>
        <ExternalLink href="https://github.com/JRUIZWK">
        <img src="assets/github-logo.png" alt="" className="github" />
        </ExternalLink>
      </div>
      <h2>My Resume</h2>
      <hr />
      <a
        className="file-container"
        href="."
        download
      >
        <img src="assets/resume-blk.png" alt="" />
       
      </a>
    </div>
  );
}