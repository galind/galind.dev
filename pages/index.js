import Head from "next/head"
import Image from "next/image"
import profile from "../public/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <>
      <Head>
        <title>Guillem Galindo</title>
      </Head>
      <main className="flex justify-center items-center h-screen text-white bg-dark-gray">
        <div className="rounded-xl bg-gradient-to-r from-grad-1 to-grad-2 p-1 w-auto h-auto">
          <div className="flex flex-col justify-between items-center rounded-xl bg-dark-gray p-5">
            <div className="">
              <Image
                src={profile}
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-3xl font-semibold">Guillem Galindo</h1>
            <h2 className="text-lg text-light-gray">Full-stack developer</h2>
            <div className="flex mt-2 mb-1 w-full justify-center">
              <a href="https://twitter.com/guillemgalindo" className="flex mx-2">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://github.com/galind" className="flex mx-2">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com/in/guillemgalindo/" className="flex mx-2">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}