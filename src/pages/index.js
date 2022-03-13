import React from "react";
import Head from "next/head";
import Particles from "../components/particles";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

const socials = [
  {href: "https://github.com/galind", icon: faGithub},
  {href: "https://linkedin.com/in/guillemgalindo", icon: faLinkedin},
  {href: "https://galind_dev", icon: faTwitter},
  {href: "https://instagram.com/guillem_galindo", icon: faInstagram}
]

export default function Home() {
  const age = new Date(new Date() - new Date("October 4, 2002")).getFullYear() - 1970;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/rocket.ico" />
      </Head>
      <Particles />
      <main className="flex justify-center items-center h-screen max-w-xl fixed mx-auto inset-x-0">
        <div className="flex flex-col justify-between items-center m-5 p-6 space-y-4 border border-white backdrop-blur">
          <div className="text-4xl font-semibold transition hover:text-red-500">
            Guillem Galindo
          </div>
          <div className="text-xl font-semibold">
            I&apos;m a {age} year old developer from Barcelona. I enjoy automating boring processes and solving everyday problems using Python.
          </div>
          <div className="space-x-4">
            {socials.map((social) => (
              <a href={social.href} key={social.href} className="transition hover:text-red-500" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}