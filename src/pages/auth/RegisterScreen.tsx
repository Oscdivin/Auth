
const RegisterScreen = () => {
  return (
<div>
<div className="w-[100%] h-[90vh] flex justify-center items-center">
<div className="w-[90%] h-[80vh]  rounded-[7px]
flex justify-center items-center  flex-wrap shadow-2xl">
<div className="flex h-[80vh] w-[50%] justify-center items-center max-sm:w-screen max-md:w-screen">
<form action=""className="w-[80%] h-[70vh] flex justify-center items-center flex-col
gap-4 max-sm:w-screen max-md:w-screen max-lg:w-screen">
<div className="w-[100%] flex items-center justify-center h-[60px]">
<span className="w-[80%] text-[30px] flex items-center">Register</span>
</div>
<input type="text" placeholder="Enter your School Name" 
className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
border-[1px] border-[gray]"/>
<input type="text" placeholder="Enter your School Name" 
className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
border-[1px] border-[gray]"/>
<input type="text" placeholder="Enter your Name" 
className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
border-[1px] border-[gray]"/>
<input type="text" placeholder="Enter your Email" 
className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] text-[#000] text-[15px] 
border-[1px] border-[gray]"/>
<input type="password" placeholder="Enter your Password" 
className="w-[80%] outline-none rounded-[7px] h-[45px] px-[8px] border-[1px] border-[gray]"/>

<button className="py-[10px] px-[20px] bg-[green] rounded-[7px] text-[#fff]">Register</button>

 <small>
 Already have an account ? SignIn
 </small>
</form>
</div>
<div className="w-[50%] h-[80vh] object-cover max-sm:hidden max-md:hidden 
rounded-[7px] bg-[red]"

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
  );
};
export default RegisterScreen;