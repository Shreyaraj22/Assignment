import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; 
import NasLogo from './NasLogo'
// Note: 'EyeIcon' aur 'EyeSlashI

const SetPasswordPage = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);
    
    // State to hold password v
    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    // Tailwind CSS 
    const logoColors = {
        greenText: '#62c76a', 
        greenDot: '#98fb98', 
        redDot: '#f06292',   
        blueDot: '#5bc0de',  
        buttonGreen: '#75d69c', // Button background color
    };

    

    const PasswordInput = ({ label, value, onChange, showPassword, toggleVisibility, id }) => (
        <div className="mb-8">
            <label htmlFor={id} className="text-gray-600 text-sm block mb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-2 bg-transparent text-gray-800 text-lg tracking-wider"
                    // Placeholder is not shown in the image, but the stars are displayed as value/masking
                    placeholder="***********" 
                />
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                    {showPassword ? <EyeIcon className="w-6 h-6" /> : <EyeSlashIcon className="w-6 h-6" />}
                </button>
            </div>
        </div>
    );

    const handleSetPassword = () => {
        console.log('Setting Password...');
        // Add your actual password setting logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white shadow-xl rounded-xl overflow-hidden pt-4 pb-4">
                
                {/* Top Section: Logo and Title */}
                <div className="text-center pt-8 pb-10">
                    <NasLogo />
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        Set Password
                    </h1>
                </div>

                {/* Password Input Fields */}
                <div className="p-6 pt-0">
                    <PasswordInput
                        label="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        showPassword={showNewPassword}
                        toggleVisibility={() => setShowNewPassword(!showNewPassword)}
                        id="new-password"
                    />

                    <PasswordInput
                        label="Re-Enter Password"
                        value={reEnterPassword}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                        showPassword={showReEnterPassword}
                        toggleVisibility={() => setShowReEnterPassword(!showReEnterPassword)}
                        id="re-enter-password"
                    />
                </div>

                {/* Set Password Button */}
                <div className="p-4 pt-0 w-full">
                     <button
                        onClick={handleSetPassword}
                        className="w-full py-3 rounded-xl font-semibold text-white transition duration-150"
                        style={{ backgroundColor: logoColors.buttonGreen, boxShadow: `0 4px 6px -1px rgba(117, 214, 156, 0.5), 0 2px 4px -2px rgba(117, 214, 156, 0.5)` }} 
                    >
                        Set Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetPasswordPage;