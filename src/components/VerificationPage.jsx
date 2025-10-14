import React from 'react';
import NasLogo from './NasLogo'
const VerificationPage = () => {
    // Dummy user data from the previous sign-up step
    const maskedEmail = '**mar@letsnas.com';
    const maskedPhone = '(***) ****890';
    const logoColors = {
        greenText: '#62c76a', // Light minty green for 'nas' text
        greenDot: '#98fb98', // Light green dot
        redDot: '#f06292',   // Pinkish red dot
        blueDot: '#5bc0de',  // Light blue dot
    };

   

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl overflow-hidden">
                
                {/* Top Section: Logo and Title */}
                <div className="text-center pt-8 pb-10">
                    <NasLogo />
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        Verification
                    </h1>
                </div>

                {/* Form Content Section */}
                <div className="p-6 pt-0">
                    
                    {/* Instructions Text */}
                    <p className="text-center text-gray-600 mb-8 px-2 leading-relaxed">
                        Enter the 6-digit code we sent to <br />
                        <span className="font-bold text-gray-800">{maskedEmail}</span> or <span className="font-bold text-gray-800">{maskedPhone}</span>
                    </p>

                    {/* Verification Code Input */}
                    <div className="mb-4">
                        <label htmlFor="verification-code" className="text-gray-600 text-sm block mb-1">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            id="verification-code"
                            placeholder="Enter 6-digit code"
                            maxLength="6"
                            className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-2 bg-transparent text-gray-800 text-lg tracking-wider"
                        />
                    </div>

                    {/* Send a New Code Link */}
                    <div className="text-left mb-10">
                        <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition duration-150 bg-transparent border-none p-0">
                            Send a New Code
                        </button>
                    </div>
                </div>

                {/* Verify Button (Note: The button is outside the main white box in the image, so applying margin/styling to mimic that look) */}
                <div className="p-4 pt-0 w-full">
                     <button
                        className="w-full py-3 rounded-xl font-semibold text-white transition duration-150"
                        style={{ backgroundColor: '#75d69c', boxShadow: '0 4px 6px -1px rgba(117, 214, 156, 0.5), 0 2px 4px -2px rgba(117, 214, 156, 0.5)' }} // Custom green color and subtle shadow
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerificationPage;