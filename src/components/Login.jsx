
import React, { useState } from "react";
import { useNavigate } from "react-router";
import NasLogo from './NasLogo'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
 const Navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[360px] bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Logo Section */}
        <div className="flex flex-col items-center pt-8 pb-4 border-b bg-gray-50">
           <NasLogo/>

          {/* Tabs */}
          <div className="flex justify-center mt-4 space-x-10 text-base font-medium">
            <button
              onClick={() => setActiveTab("login")}
              className={`pb-2 border-b-2 ${
                activeTab === "login"
                  ? "border-blue-500 text-black"
                  : "border-transparent text-gray-400"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => Navigate("/Signup")}
              className={`pb-2 border-b-2 ${
                activeTab === "signup"
                  ? "border-blue-500 text-black"
                  : "border-transparent text-gray-400"
              }`}
            >
              Sign-up
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-6 py-8">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              type="email"
              placeholder="ammar@letsnas.com"
              className="w-full border-b border-gray-300 focus:outline-none py-2 mt-1"
            />
          </div>

          <div className="mt-5 relative">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full border-b border-gray-300 focus:outline-none py-2 mt-1 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-[30px] text-gray-500"
            >
              {showPassword ? (
                <EyeOffIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </button>
          </div>

          <div className="mt-3 text-right" onClick={() => Navigate("/ForgotPasswordPage")}>
            <p className="text-sm text-blue-600 hover:underline"> 
              Forgot Password?
            </p>
          </div>

          <button className="w-full bg-[#69d19c] hover:bg-[#57c08b] text-white font-semibold py-2 rounded-full mt-5 " onClick={() => Navigate("/Verification")}> 
            Login
          </button>

          <p className="text-center text-gray-500 text-sm mt-5">
            or use one of your social profiles
          </p>

          {/* Social Buttons */}
          <div className="mt-4 space-y-3">
            <button className="flex items-center justify-center w-full border border-gray-400 rounded-full py-2 text-sm font-medium hover:bg-gray-100">
              <FcGoogle className="mr-2 text-lg" />
              Sign in with Google
            </button>

            <button className="flex items-center justify-center w-full border border-gray-400 rounded-full py-2 text-sm font-medium hover:bg-gray-100">
              <FaFacebook className="mr-2 text-blue-600 text-lg" />
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Login