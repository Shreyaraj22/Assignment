import React from 'react';
import { useNavigate } from 'react-router';
import NasLogo from './NasLogo'
import { CameraIcon } from '@heroicons/react/24/outline';

const Signup = () => {
  const Navigate = useNavigate()
  const name = 'Ammar';
  const email = 'ammar@letsnas.com';
  const mobileNumber = '9098909890';
  const uploadId = '202898_876.jpg';
  const uploadPhoto = '202898_876.jpg';

  const logoColors = {
    green: 'bg-[#98fb98]', // Light minty green, adjust as needed
    red: 'bg-[#f06292]',   // Pinkish red, adjust as needed
    blue: 'bg-[#5bc0de]',  // Light blue, adjust as needed
  };

  const InputField = ({ label, value, id, type = 'text', isFileUpload = false }) => (
    <div className="mb-6">
      <label htmlFor={id} className="text-gray-600 text-sm block mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          readOnly={!isFileUpload} // Values are read-only in this design replication
          className={`w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-2 bg-transparent text-gray-800 ${isFileUpload ? 'pr-10 cursor-default' : ''}`}
        // Tailwind styles to mimic the input look
        />
        {isFileUpload && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600">
            <CameraIcon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );

 
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
        <NasLogo/>

        {/* Tabs for Login and Sign-up */}
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 text-center text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-150" onClick={() => Navigate("/")}>
            Login
          </button>
          <button className="flex-1 py-3 text-center text-lg font-medium text-blue-500 border-b-2 border-blue-500 transition duration-150">
            Sign-up
          </button>
        </div>

        {/* Sign-up Form Fields */}
        <div className="p-6 pt-10">
          <InputField label="Name" value={name} id="name" />
          <InputField label="Email address" value={email} id="email" type="email" />
          <InputField label="Mobile Number" value={mobileNumber} id="mobile" type="tel" />

          {/* Upload ID Field */}
          <InputField
            label="Upload ID"
            value={uploadId}
            id="upload-id"
            isFileUpload={true}
          />

          {/* Upload Photo Field */}
          <InputField
            label="Upload Photo"
            value={uploadPhoto}
            id="upload-photo"
            isFileUpload={true}
          />

          <button className="w-full bg-[#69d19c] hover:bg-[#57c08b] text-white font-semibold py-2 rounded-full mt-5 " onClick={() => Navigate("/SetPasswordPage")}>
            Set Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup