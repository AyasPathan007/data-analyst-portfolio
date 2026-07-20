import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaPhoneAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Let's Connect</h2>

      <p>
        I'm actively seeking Data Analyst opportunities. Feel free to reach
        out if you'd like to discuss a role, collaboration, or just connect.
      </p>

      <div className="contact-links">
        <a
          href="mailto:ayaspathn163@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
          Email
        </a>
        <a href="tel:+91 7410199069">
    <FaPhoneAlt />
    +91 7410199069
  </a>
        <a
          href="https://www.linkedin.com/in/ayas-pathan-770268414/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/AyasPathan007/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <FaFileDownload />
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;