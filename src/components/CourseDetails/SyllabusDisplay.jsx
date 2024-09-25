import React from "react";
import "../../App.css";

const SyllabusDisplay = ({ selectedBoard }) => {
  const parseSyllabus = (syllabus) => {
    if (typeof syllabus === "string") {
      return syllabus.split("!").map((item) => item.trim());
    } else if (Array.isArray(syllabus)) {
      let result = [];
      syllabus.forEach((section) => {
        Object.keys(section).forEach((key) => {
          const topics = section[key]
            .split("!")
            .map((item) => `${item.trim()}`);
          result.push(...topics);
        });
      });
      return result;
    }
    return ["Syllabus not available"];
  };

  const syllabusItems = parseSyllabus(selectedBoard.syllabus);
  const columns = [];
  const itemsPerColumn = Math.ceil(syllabusItems.length / 3);
  for (let i = 0; i < syllabusItems.length; i += itemsPerColumn) {
    columns.push(syllabusItems.slice(i, i + itemsPerColumn));
  }

  return (
    <div className="syllabus-container">
      {columns.map((column, index) => (
        <div key={index} className="syllabus-column">
          {column.map((item, itemIndex) => (
            <div key={itemIndex} className="syllabus-topic">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SyllabusDisplay;
