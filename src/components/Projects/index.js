import React, { Component } from "react";
import style from "./Projects.module.scss";
import { isMobile } from "../../utils";

const projectData = [
  {
    id: 1,
    projectName: "Coder Playground",
    description:
      "A platform for online coding in javascript and making changes to chatbot.",
    techstack: "Reactjs, Javascript, HTML, SCSS, Webpack",
    url: "assets/images/coder_pg.png",
    demoUrl: "https://coder-playground.herokuapp.com/",
    repoUrl: "https://github.com/nehachauhan14/code_playground",
  },
];

const mobile = isMobile();

const Projects = (props) => {
  return (
    <section id="projects" className={style.container}>
      <div className={style.content}>
        <h1 className="title">Projects</h1>
        {projectData.map((project, id) => {
          const {
            url,
            projectName,
            description,
            techstack,
            demoUrl,
            repoUrl,
          } = project;

          return (
            <div key={id} className={style.projectContainer}>
              <img src={url} alt={projectName} className={style.image} />
              <div className={style.projectDescription}>
                <h2 className={style.projectName}>{projectName}</h2>
                <div className={style.projectDetail}>{description}</div>
                <div className={style.techstack}>
                  {!mobile ? `Techstack: ${techstack}` : `${techstack}`}
                </div>
                <div className={style.ctas}>
                  <a
                    href={demoUrl}
                    target="_blank"
                    className={`${style.btn} ${style.primary}`}
                  >
                    Demo{" "}
                    <svg
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path fill="none" d="M18 0v18H0V0z" />
                        <path
                          d="M12.589 9a.996.996 0 00-.293-.707L6.034 2.03a.5.5 0 00-.707.707L11.589 9l-6.261 6.262a.5.5 0 00.707.707l6.26-6.262A.996.996 0 0012.59 9"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </a>
                  {!mobile && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      className={`${style.btn} ${style.secondary}`}
                    >
                      Code{" "}
                      <svg
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path fill="none" d="M18 0v18H0V0z" />
                          <path
                            d="M12.589 9a.996.996 0 00-.293-.707L6.034 2.03a.5.5 0 00-.707.707L11.589 9l-6.261 6.262a.5.5 0 00.707.707l6.26-6.262A.996.996 0 0012.59 9"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
