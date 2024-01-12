import React from 'react';

export default function Checkbox({ className = '', label = '', onChange, ...props }) {
    return (
        <label className={`flex items-center ${className}`}>
            <input
                {...props}
                type="checkbox"
                onChange={onChange}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 mr-2"
            />
            {label && <span>{label}</span>}
        </label>
    );
}
