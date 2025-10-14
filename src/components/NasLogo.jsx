import React from 'react';

const NasLogo = () => {
    // Colors derived from the image for an exact match
    const colors = {
        text: '#64c781',      // Gradient-like light green for 'nas' text
        barYellow: '#f5c942', // Yellow bar
        barRed: '#f0606d',    // Red bar
        barGreen: '#78d29b',  // Green bar
        dotGreen: '#88d77c',  // Top left dot
        dotBlue: '#61c9dc',   // Top center dot
        dotYellow: '#f9d268', // Top right dot (looks yellow in this context)
        background: '#f8f8f8', // Light background of the original image
    };

    return (
        // Main container with the light background color (optional, remove if integrating into a different background)
        <div 
            className="flex items-center justify-center p-8 w-full"
            style={{ backgroundColor: colors.background }}
        >
            <div className="flex items-center space-x-1">
                
                {/* 1. 'nas' Text */}
                <span 
                    className="text-[60px] font-bold tracking-tight" // Increased font size for prominence
                    style={{ color: colors.text }} 
                >
                    nas
                </span>
                
                {/* 2. Three Dots and Three Bars Group */}
                <div className="flex flex-col items-center ml-2">
                    
                    {/* Top Dots */}
                    <div className="flex space-x-1.5 mb-1.5">
                        <span 
                            className="w-4 h-4 rounded-full block" 
                            style={{ backgroundColor: colors.dotGreen }}
                        ></span> 
                        <span 
                            className="w-4 h-4 rounded-full block" 
                            style={{ backgroundColor: colors.dotBlue }}
                        ></span> 
                        <span 
                            className="w-4 h-4 rounded-full block" 
                            style={{ backgroundColor: colors.dotYellow }}
                        ></span> 
                    </div>
                    
                    {/* Bottom Bars (Vertical Rectangles) */}
                    <div className="flex space-x-1.5">
                        <span 
                            className="w-4 h-[30px] rounded-full block" // Full rounded edges for the bars
                            style={{ backgroundColor: colors.barYellow }}
                        ></span> 
                        <span 
                            className="w-4 h-[30px] rounded-full block" 
                            style={{ backgroundColor: colors.barRed }}
                        ></span> 
                        <span 
                            className="w-4 h-[30px] rounded-full block" 
                            style={{ backgroundColor: colors.barGreen }}
                        ></span> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NasLogo;