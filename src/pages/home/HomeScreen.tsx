import { useState } from "react";
import RegisterScreen from "../auth/RegisterScreen";
import SigninScreen from "../auth/SigninScreen";



const HomeSceen = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(true);

  const onToggle = () => {
    setToggle1(false);
    setToggle(true);
  };
  const onToggle1 = () => {
    setToggle1(true);
    setToggle(false);
  };

  return (
    <div>
    <div className="w-[100%]">
      <div className="flex justify-center w-[100%] items-center h-[12vh]">
        <button
          className={`
          px-7 py-2 bg-[${
            toggle1 ? "darkorange" : "white"
          }] rounded-[7px] mx-2 border-[1px] border-[gray]
          border-[${toggle1 ? "" : "1px"}]
          text-[${toggle1 ? "blue" : "darkorange"}]

          `}
          style={{
            color: `${toggle1 ? "blue" : "green"}`,
          }}
          onClick={onToggle}
        >
    Register
        </button>
        <button
          className={`
          px-7 py-2 bg-[${
            toggle ? "darkorange" : ""
          }] rounded-[7px] mx-2 border-[1px] border-[gray]
          border-[${toggle ? "" : "1px"}]
          text-[${toggle ? "red" : ""}]

          `}
          style={{
            color: `${toggle ? "blue" : "green"}`,
          }}
          onClick={onToggle1}
        >
      Signin
        </button>
      </div>

      {toggle ? (
        <div>
          <RegisterScreen/>
        </div>
      ) : (
        <div>
          <SigninScreen />
        </div>
      )}
    </div>
    </div>
  );
};

export default HomeSceen;