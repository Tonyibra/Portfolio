import React from "react";
import Link from "next/Link";
const Portfolio = () => {
  return (
    <div className="flex flex-col p-4 border-b-2">
      <div className="text-gray-700 text-4xl font-bold">
        <span>Portfolio</span>
      </div>
      <div>
        <div className="flex flex-col">
          <img
            loading="lazy"
            src="https://www.dignited.com/wp-content/uploads/2020/04/Google-Docs-Header-1280x720-1-1024x576.png"
          />
          <h2 className="text-gray-700 text-xl font-bold pt-8 pb-8">
            Google Docs Clone
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            aperiam. Sint ad fuga placeat reprehenderit. At dolorem debitis,
            doloremque eos aspernatur esse quasi, perferendis sed sunt atque
            corrupti alias fugit!
          </p>
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
  );
};

export default Portfolio;
