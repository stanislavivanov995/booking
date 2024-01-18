import React, { useState, forwardRef, useEffect, useRef } from 'react';

const OptionsMenu = forwardRef(({ options,selected, onSelect, className = '', isFocused = false, ...props }, ref) => {
  const inputRef = ref || useRef();
  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(selected ? options[selected -1] : options[0]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    onSelect && onSelect(option);
  };


  return (
    <div className="relative" ref={dropdownRef}>
      <input
        {...props}
        className={`mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-4 ${className}`}
        ref={inputRef}
        onClick={handleToggle}
        // value={selectedOption ? selectedOption.name : ''}
        value={selectedOption ? selectedOption.name : options[0].name}
        readOnly
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.id}
              className="mt-1 block w-full py-2 px-4 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default OptionsMenu;
