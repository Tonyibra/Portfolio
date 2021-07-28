import React from "react";
import Link from "next/link";
const Portfolio = ({ data }) => {
  return (
    <>
      {data?.map((project, idx) => (
        <div key={idx} className="flex flex-col p-4 border-b-2">
          <div className="text-gray-700 text-4xl font-bold">
            <span>Portfolio</span>
          </div>
          <div>
            <div className="flex flex-col">
              <img loading="lazy" src={project.img} />
              <h2 className="text-gray-700 text-xl font-bold pt-8 pb-8">
                {project.title}
              </h2>
              <p>{project.desc}</p>
              <div className="flex pt-4 ">
                <Link href="#">
                  <img
                    src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
                    className="h-7"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
