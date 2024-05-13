import { Calendar, Location } from "../icons";
import SectionTitle from "./SectionTitle";

function Experience({ experience }: any) {
  return (
    <section>
      <SectionTitle title="Work Experience" />
      <div className="mt-2">
        {experience.map((item: any, index: number) => (
          <div key={index} className="mt-3">
            <h2 className="text-primary text-lg font-semibold">
              {item.company}
            </h2>
            {item.roles.map((role: any, index: number) => (
              <div key={index}>
                <h3 className="text-secondary text-md font-semibold">
                  {role.title}
                </h3>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center mt-2">
                    <Calendar color="rgb(55, 65, 81, 0.7)" className="w-4" />
                    <span className="text-sm">{role.period}</span>
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <Location color="rgb(55, 65, 81, 0.7)" className="w-4" />
                    <span className="text-sm">{role.location}</span>
                  </div>
                </div>
                {role?.work && (
                  <ul className="mt-2 list-disc pl-5">
                    {role?.work?.map((item: any, index: number) => (
                      <li key={index} className="text-xs mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {role?.projects && (
                  <div className="mt-3">
                    {role?.projects?.map((project: any, index: number) => (
                      <div key={index}>
                        <h2 className="text-secondary text-md font-semibold mt-2">
                          # Project{index + 1}
                        </h2>
                        <h4 className="font-semibold text-sm mt-2">
                          <span className="text-primary font-semibold">
                            Title:{" "}
                          </span>
                          {project.title}
                        </h4>
                        {/* <h4 className="text-sm">{project.title}</h4> */}
                        <p className="text-sm mt-2 font-semibold text-primary">
                          Description:
                        </p>
                        <p className="text-sm">{project.description}</p>
                        <p className="text-sm mt-2 text-primary font-semibold">
                          Technologies:
                        </p>
                        <p className="text-sm">{project.tech}</p>
                        <p className="text-primary text-sm font-semibold mt-2">
                          Responsibilities:
                        </p>
                        <ul className="mt-2 list-disc pl-5">
                          {project?.responsibilities?.map(
                            (item: any, index: number) => (
                              <li key={index} className="text-sm mb-2">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
