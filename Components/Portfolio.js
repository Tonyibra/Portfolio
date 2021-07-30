import React from "react";
import Link from "next/link";
const Portfolio = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2">
      {data?.map((project, idx) => (
        <div className="m-4">
          <div key={idx} className="p-4 border-b-2 md:border-0  h-full ">
            <div>
              <div>
                <img
                  loading="lazy"
                  src={project.img}
                  className="w-full h-96 object-cover "
                />
                <h2 className="text-gray-700 text-xl font-bold pt-8 pb-8">
                  {project.title}
                </h2>
                <p>{project.desc}</p>
                <div className="flex pt-4 space-x-2 flex items-center ">
                  <Link href={project.githubLink} target="_blank">
                    <img
                      src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
                      className="h-7 cursor-pointer"
                    />
                  </Link>
                  <span className="text-gray-700">Github</span>
                </div>
                <>
                  {project.isLive && (
                    <div className="flex pt-4 space-x-2 flex items-center ">
                      <Link href={project.live} target="_blank">
                        <img
                          src="https://image.flaticon.com/icons/png/512/2700/2700648.png"
                          className="h-7 cursor-pointer"
                        />
                      </Link>
                      <span className="text-gray-700">Live</span>
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
