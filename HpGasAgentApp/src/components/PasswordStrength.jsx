import React from 'react';

const PasswordStrength = ({ password }) => {
    const getStrength = () => {
        if (password.length < 8) {
            return {
                level: 'Weak',
                color: 'bg-red-500',
                width: 'w-1/3'
            };
        } else if (password.length < 12) {
            return {
                level: 'Medium',
                color: 'bg-yellow-500',
                width: 'w-2/3'
            };
        } else {
            return {
                level: 'Strong',
                color: 'bg-green-500',
                width: 'w-full'
            };
        }
    };

    const strength = getStrength();

    return (
        <div>
            <div className="flex items-center mt-2">
                <div className={`h-2 rounded-full ${strength.color} ${strength.width}`}></div>
                <p className="ml-2 text-sm text-gray-600">{strength.level}</p>
            </div>
        </div>
    );
};

export default PasswordStrength;
