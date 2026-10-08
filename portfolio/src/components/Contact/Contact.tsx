import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <p className="contact__label">06 / Contact</p>

        <div className="contact__main">
          <h2 className="contact__title">
            HOW TO CONTACT
            <br />
            ME ?.
          </h2>

          <div className="contact__socials">
           <Button
  component="a"
  href="https://linkedin.com/in/sai-sirisha-sabbella"
  target="_blank"
  rel="noopener noreferrer"
  variant="outlined"
  endIcon={<FaLinkedin size={16} />}
  className="contact__social-button"
>
  LinkedIn
</Button>

<Button
  component="a"
  href="https://github.com/saisiri6803"
  target="_blank"
  rel="noopener noreferrer"
  variant="outlined"
  endIcon={<FaGithub size={16} />}
  className="contact__social-button"
>
  GitHub
</Button>
          </div>

          <Button
            component="a"
            href="mailto:saisirisha6803@gmail.com"
            variant="contained"
            disableElevation
            endIcon={<ArrowUpRight size={16} />}
            className="contact__button"
          >
            saisirisha6803@gmail.com
          </Button>
        </div>

        <footer className="contact__footer">
          <span>© 2026 Sai Sirisha</span>

          <span className="contact__footer-note">
            Designed with intention.
          </span>
        </footer>
      </div>
    </section>
  );
};