
const Reg = () => {
    return (
      <div>
            <div className="w-[100%] h-[88vh] flex justify-center items-center ">
        <div className="
        w-[80%] h-[80vh]  rounded-[7px]
         flex justify-center items-center  flex-wrap  shadow-lg">
         <div className="bg-[#fff] flex min-h-[50vh] w-[50%] justify-center items-center max-sm:w-screen max-md:w-screen
          max-lg:w-screen max-xl:w-95 max-2xl:w-99">
         <form action="
          " className="w-[70%] min-h-[40px] flex justify-center items-center flex-col
           gap-4 max-sm:w-screen max-md:w-screen max-lg:w-screen max-xl:w-95 max-2xl:w-99">
            <div className="w-[100%] flex items-center justify-center h-[60px]">
  <span className="w-[80%] text-[30px] flex items-center">Register</span>
  </div>
            <input type="text" placeholder="Enter your School Name" 
  className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
  border-[1px] border-[gray]"/>
  <input type="text" placeholder="Enter your Email" 
  className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
  border-[1px] border-[gray]"/>
  <input type="text" placeholder="Enter your Name" 
  className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px]
   text-[#000] text-[15px] border-[1px] border-[gray]"/>
  <input type="password" placeholder="Enter your Password" 
   className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] border-[1px] border-[gray]"/>
  <input type="password"  className="w-[80%] outline-none rounded-[7px] h-[45px]
   px-[8px] border-[1px] border-[gray]
  "placeholder="Confirm Password"/>
  
  <button className="py-[10px] px-[20px] bg-[green] rounded-[7px] text-[#fff]"
   type="submit">Register</button>
  
  <div className="w-[50%] h-[45px] flex justify-center items-center max-sm:w-screen 
   max-md:w-screen max-lg:w-screen max-xl:w-screen max-2xl:w-screen">
  <small>
  Already have an account ? Sign-In
  </small>
  </div>
          </form>
         </div>
        <div className="w-[50%] h-[80vh] object-cover  max-sm:hidden max-md:hidden max-lg:hidden
   max-md:w-screen max-lg:w-screen max-xl:w-90 max-2xl:w-78 rounded-[7px]"
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
  
  export default Reg
  