import React from 'react';

const RoundedCorners = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="10"
                    y="10"
                    width="180"
                    height="180"
                    rx="20" // Horizontal corner radius
                    ry="20" // Vertical corner radius
                    fill="#4A90E2" // Fill color
                />
            </svg>
        </div>
    );
};

export default RoundedCorners;
