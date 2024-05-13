import { guiChallenges, projects, technstack } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="pb-20">
        <article
          className="min-h-[400px] sm:min-h-[600px] bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: "url('/banner.jpeg')",
          }}
        >
          <section className="text-center px-2">
            <Image
              src="/profile.jpg"
              width={128}
              height={128}
              alt="Profile Image"
              className="rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover object-top mx-auto"
            />
            <h1 className="text-2xl sm:text-4xl font-semibold text-white mt-3">
              Vinay Kumar
            </h1>
            <p className="text-white mt-2 text-xs sm:text-sm">
              Software Engineer | Web Enthusiast | Minimalist | Cook
            </p>
            <p className="text-white mt-2 text-sm">
              Status:{" "}
              <span className="text-green-500">
                Learning and building stuff
              </span>
            </p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <a href="https://github.com/vinaykanna" target="_blank">
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  src="/github.png"
                  alt="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-kumar-497911144/"
                target="_blank"
              >
                <Image
                  width={30}
                  className="rounded-full"
                  height={30}
                  src="/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
              <Link href="/resume" target="_blank">
                <Image
                  width={30}
                  className="rounded-full"
                  height={30}
                  src="/cv2.png"
                  alt="CV"
                />
              </Link>
            </div>
          </section>
        </article>
        <article className="max-w-5xl text-center mx-auto mt-20 px-4">
          <h1 className="text-3xl font-semibold mt-3">
            <span className="headline">Tech Stack</span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-10 mt-10">
            {technstack.map((tech, index) => (
              <div
                className="bg-[#00aa930d] p-5 flex items-center justify-center h-[100px] shadow"
                key={index}
                title={tech.name}
              >
                <Image
                  width={tech.width || 60}
                  height={tech.height || 60}
                  src={tech.image}
                  alt={tech.name}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </article>
        <article className="max-w-5xl mx-auto mt-20 px-4">
          <h1 className="text-3xl font-semibold mt-3 text-center">
            <span className="headline">Things I built</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {projects.map((form, index) => (
              <div className="bg-[#00aa930d] p-5 shadow" key={index}>
                <Image
                  width={500}
                  height={600}
                  src={form.image}
                  alt={form.name}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium mt-4">{form.name}</h3>
                <p className="text-sm mt-2">{form.description}</p>
                <div className="mt-5">
                  <a href={form.source} target="_blank">
                    <button
                      type="button"
                      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg  py-2.5 text-center inline-flex items-center text-xs px-3 mt-2 sm:mt-0"
                    >
                      <Image
                        width={17}
                        height={17}
                        className="mr-2 -ml-1"
                        src="/github_dar.png"
                        alt="Github"
                      />
                      View Source
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="max-w-5xl mx-auto mt-20 px-4">
          <h1 className="text-3xl font-semibold mt-3 text-center">
            <span className="headline relative">GUI Challenges</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {guiChallenges.map((chall, index) => (
              <div
                className="bg-[#00aa930d] p-5 border-2 border-solid border-[#00aa93eb] rounded-md shadow flex flex-col"
                key={index}
              >
                <div className="flex-auto">
                  <h3 className="text-lg font-medium mt-4">{chall.name}</h3>
                  <p className="text-sm mt-2">{chall.description}</p>
                </div>
                <div className="mt-5">
                  <a href={chall.source} target="_blank">
                    <button
                      type="button"
                      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg py-2.5 text-center inline-flex items-center text-xs px-3 mt-2 sm:mt-0"
                    >
                      <Image
                        width={17}
                        height={17}
                        className="mr-2 -ml-1"
                        src="/github_dar.png"
                        alt="Github"
                      />
                      View Source
                    </button>
                  </a>
                  <a href={chall.link} target="_blank">
                    <button
                      type="button"
                      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg py-2.5 text-center inline-flex items-center text-xs px-3 ml-2"
                    >
                      <Image
                        width={16}
                        height={16}
                        className="mr-2 -ml-1"
                        src="/www.png"
                        alt="World Wide Web"
                      />
                      View Online
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
      <footer className="bg-[#303030] py-4 text-center">
        <p className="text-md text-white opacity-80">
          &copy; {new Date().getFullYear()} All rights reserved | vinay kumar
        </p>
      </footer>
    </>
  );
}
