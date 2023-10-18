import { Link } from "react-router-dom";
import { useState } from "react";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 13) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div>
      {scroll ? (
        <div className="w-full h-[60px] flex items-center justify-center bg-gray-300 fixed">
          <div className="w-[95%]  h-full flex justify-center items-center">
            <div className="flex justify-between items-center w-full">
              <div className="flex w-[auto]  justify-between items-center">
                <div className="mr-20">Logo</div>
                <div className="flex">
                  <Link to="/mission">
                    <div className="mx-5 font-bold text-gray-500">
                      Our Mission
                    </div>
                  </Link>
                  <Link to="/projects">
                    <div className="mx-5 font-bold text-gray-500">Projects</div>
                  </Link>
                  <Link to="/blogs">
                    <div className="mx-5 font-bold text-gray-500">Blogs</div>
                  </Link>
                  <Link to="/contact">
                    <div className="mx-5 font-bold text-gray-500">Contact</div>
                  </Link>
                </div>
              </div>
              <div>
                <button className="px-[24px] py-2 rounded-tl-[20px] rounded-br-[20px] text-green-400 bg-gray-100 outline-none font-bold">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[60px] flex items-center justify-center fixed">
          <div className="w-[95%]  h-full flex justify-center items-center">
            <div className="flex justify-between items-center w-full">
              <div className="flex w-[auto]  justify-between items-center">
                <div className="mr-20">Logo</div>
                <div className="flex">
                  <Link to="/mission">
                    <div className="mx-5 font-bold text-gray-500">
                      Our Mission
                    </div>
                  </Link>
                  <Link to="/projects">
                    <div className="mx-5 font-bold text-gray-500">Projects</div>
                  </Link>
                  <Link to="/blogs">
                    <div className="mx-5 font-bold text-gray-500">Blogs</div>
                  </Link>
                  <Link to="/contact">
                    <div className="mx-5 font-bold text-gray-500">Contact</div>
                  </Link>
                </div>
              </div>
              <div>
                <button className="px-[24px] py-2 rounded-tl-[20px] rounded-br-[20px] text-green-400 bg-gray-100 outline-none font-bold">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstHeader;
