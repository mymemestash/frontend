import React, { useState } from "react";
import bg from "../../assests/bg3.mp4";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Button } from "../../components/buttons/Button";
import google from "../../assests/google.png";
import facebook from "../../assests/facebook.png";
import { IconContext } from "react-icons/lib";
function Login() {
  const [values, setValues] = useState({
    showPass: false,
  });
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
      <div className="w-full h-screen">
        <div className="grid grid-cols-1  sm:grid-cols-6">
          <div className="flex sm:flex-col flex-col-reverse justify-center h-screen items-center py-8 sm:py-0 bg-[#6DB1C0] col-span-2 sm:order-first order-last">
            <div className="flex sm:flex-row flex-col justify-center items-center gap-5 mb-4 w-[100%] px-4 sm:mt-0 mt-5">
              <Button
                variant="primary"
                paddingLess="true"
                className="sm:w-[140px] w-[100%] h-[42px] text-[#141414] text-base"
                imgSrc={google}
                imgAlt="google"
              >
                Google
              </Button>
              <Button
                variant="secondary"
                paddingLess="true"
                className="sm:w-[140px] w-[100%] h-[42px] text-[#141414] text-base"
                imgSrc={facebook}
                imgAlt="google"
              >
                Facebook
              </Button>
            </div>
            <div className="sm:flex hidden  justify-center items-center font-medium">
              Or
            </div>
            <form className="px-4 sm:px-6 xl:px-20 w-[100%]">
              <div className="mb-4">
                <label className="mb-3 text-sm font-medium text-[#ffffff]">
                  Email Address
                </label>
                <input
                  className=" md:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF]  bg-[#ffffffab] rounded-lg"
                  type="text"
                />
              </div>

              <div className="mb-6 relative text-[#ffffff]">
                <label className="mb-3 text-sm font-medium">Password</label>
                <input
                  type={values.showPass ? "text" : "password"}
                  label="Password"
                  required
                  className="md:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#ffffffab] rounded-lg"
                />
                <IconContext.Provider value={{ color: "#6DB1C0" }}>
                  <span className="absolute right-[8px] top-[36px] text-white cursor-pointer">
                    <span onClick={handlePassVisibilty}>
                      {values.showPass ? <IoEyeSharp /> : <IoEyeOffSharp />}
                    </span>
                  </span>
                </IconContext.Provider>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-start gap-[10px] text-sm font-medium max-w-[340px]">
                  <input type="checkbox" className="mt-[5px]" />
                  <h5 className="text-[#ffffff]">Remember me</h5>
                </div>
                <a href="/recover" className="text-sm  text-[#ffffff]">
                  Forgot Password
                </a>
              </div>
              <div className="sm:my-6 my-4 ">
                <Button
                  variant="primary"
                  paddingLess="true"
                  className="w-[100%] md:h-[48px] h-[42px] text-[#141414] text-base"
                >
                  Login
                </Button>
              </div>

              <h5 className=" text-center text-sm  text-[#000]">
                Don't have an account?{" "}
                <a href="/auth/signup" className="underline text-[#ffffff]">
                  Signup
                </a>
              </h5>
            </form>
          </div>

          <div className="sm:grid hidden col-span-4 relative sm:h-screen h-[40vh]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
              <video
                className="min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
                autoPlay
                loop
                muted
                type="video/mp4"
              >
                <source src={bg} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
