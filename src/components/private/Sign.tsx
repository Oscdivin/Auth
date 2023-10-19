
const SigninScreen = () => {
    return (
      <div>
         <div className="w-[100%] h-[88vh] flex justify-center items-center">
        <div className="w-[90%] h-[80vh] flex justify-center items-center flex-wrap shadow-lg">
  <form action="" className="w-[40%] h-[80vh] bg-[#fff] flex flex-col justify-center
   items-center gap-5 rounded-[7px] max-sm:w-[100%]
   max-md:w-screen max-lg:w-screen max-xl:w-90 max-2xl:w-78">
  <div className="w-[100%] flex items-center justify-center h-[80px]">
  <span className="w-[80%] text-[30px]">Sign-In</span>
  
  </div>
  <input type="text" placeholder="Enter your Email" 
  className="w-[80%] h-[35px]outline-none rounded-[7px] 
  h-[45px] px-[8px] text-[#000] text-[15px] border-[1px] border-[gray]"/>
  <input type="password" placeholder="Enter your Password"  
  className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] border-[1px] border-[gray]"/>
  <button className="py-[10px] px-[20px] bg-[green] rounded-[7px] text-[#fff]">Sign-in</button>
  </form>
  <div  className="w-[50%] h-[80vh] object-cover max-sm:hidden max-md:hidden max-lg:hidden
   max-md:w-hidden max-lg:w-screen max-xl:w-90 max-2xl:w-78 rounded-[7px]"
  //    style={{backgroundImage: `url(${pix})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat"
  // }} 
  >
  
  </div>
        </div>
        </div>
      </div>
    )
  }
  
  export default SigninScreen