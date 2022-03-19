import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

const socials = [
  {href: "https://github.com/galind", icon: faGithub},
  {href: "https://linkedin.com/in/guillemgalindo", icon: faLinkedin},
  {href: "https://twitter.com/galind_dev", icon: faTwitter},
  {href: "https://instagram.com/guillem_galindo", icon: faInstagram}
]

export default function Home() {
  const age = new Date(new Date() - new Date("October 4, 2002")).getFullYear() - 1970;

  return (
    <main className="">
    </main>
  );
}