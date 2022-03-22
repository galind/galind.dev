import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {icon: faUser, title: "About Me", href: "/about"},
  {icon: faBriefcase, title: "Projects", href: "/projects"},
  {icon: faGithub, title: "GitHub", href: "https://github.com/galind"},
  {icon: faLinkedin, title: "LinkedIn", href: "https://linkedin.com/in/guillemgalindo"},
  {icon: faTwitter, title: "Twitter", href: "https://twitter.com/galind_dev"},
  {icon: faInstagram, title: "Instagram", href: "https://instagram.com/guillem_galindo"},
]

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-6xl sm:text-7xl md:text-8xl font-semibold">
          Guillem Galindo
        </div>
        <div className="text-2xl space-x-2 sm:text-3xl sm:space-x-4 md:text-4xl md:space-x-6">
          {socials.map((social) => (
              <a href={social.href} key={social.href} title={social.title} className="transition hover:text-red-500 active:text-red-700" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
        </div>
      </div>
    </main>
  );
}