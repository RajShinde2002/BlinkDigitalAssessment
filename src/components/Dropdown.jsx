import React from "react";
import { useSelector } from "react-redux";

const Dropdown = ({ setCurrentGrade }) => {
  const grades = useSelector((state) => state.pricing.allGrades);

  const handleChange = (event) => {
    setCurrentGrade(event.target.value);
  };

  return (
    <select className="gradeDropdown" name="Grade" id="Grade" onChange={handleChange}>
      {grades.map((item, index) => (
        <option className="" key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
