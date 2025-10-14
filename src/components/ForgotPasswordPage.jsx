import React, { useState } from 'react';
import NasLogo from './NasLogo'

const ForgotPasswordPage = () => {
    // State to hold the email address
    const [email, setEmail] = useState('ammar@letsnas.com'); 

    // Tailwind CSS classes for the logo colors (consistent across all components)
    const logoColors = {
        greenText: '#62c76a', 
        greenDot: '#98fb98', 
        redDot: '#f06292',   
        blueDot: '#5bc0de',  
        buttonGreen: '#75d69c', // Button background color
    };

    
    const handleSendCode = () => {
        console.log(`Sending code to: ${email}`);
        // Add your actual "Send Code" logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl overflow-hidden pt-4 pb-4">
                
                {/* Top Section: Logo and Title */}
                <div className="text-center pt-8 pb-10">
                    <NasLogo />
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        Forgot Password
                    </h1>
                </div>

                {/* Form Content Section */}
                <div className="p-6 pt-0">
                    
                    {/* Instructions Text */}
                    <p className="text-gray-600 mb-8">
                        Enter the email address to send code
                    </p>

                    {/* Email Input Field */}
                    <div className="mb-12">
                        <label htmlFor="email-address" className="text-gray-600 text-sm block mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email-address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // Read-only is set in the image, but in a real form, remove the `readOnly` prop
                            className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-2 bg-transparent text-gray-800 text-lg"
                        />
                    </div>
                </div>

                {/* Send Code Button */}
                <div className="p-4 pt-0 w-full">
                     <button
                        onClick={handleSendCode}
                        className="w-full py-3 rounded-xl font-semibold text-white transition duration-150"
                        style={{ backgroundColor: logoColors.buttonGreen, boxShadow: `0 4px 6px -1px rgba(117, 214, 156, 0.5), 0 2px 4px -2px rgba(117, 214, 156, 0.5)` }} 
                    >
                        Send Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;