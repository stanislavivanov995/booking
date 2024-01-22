import { useState } from "react";
const Checkbox = ({ label, FacilityCheck }) => {
  const [isChecked, setIsChecked] = useState(FacilityCheck);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input 
        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 mr-2"
        type="checkbox" 
        onChange={() => setIsChecked((prev) => !prev)}
        checked={isChecked} />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;