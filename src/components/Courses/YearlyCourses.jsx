import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import DetailsBar from "../CourseDetails/DetailsBar";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBoards,
  setYearlyCoursesData,
} from "../../redux/slices/yearlyBoardSlice";

const YearlyCourses = () => {
  const [currentGrade, setCurrentGrade] = useState("Grade 6");
  const [currentBoard, setCurrentBoard] = useState("CBSE");
  const [board, setBoard] = useState(0);

  const yearlyGradesData = useSelector(
    (state) => state.pricing.yearlyGradesData
  );
  function handleClick(e, id) {
    setBoard(id);
    setCurrentBoard(e.target.value);
    dispatch(filterBoards(e.target.value));
  }
  const dispatch = useDispatch();

  useEffect(() => {
    let filtered = yearlyGradesData.filter(
      (item) => item.grade == currentGrade
    );
    dispatch(setYearlyCoursesData(filtered[0]));
    dispatch(filterBoards(currentBoard));
  }, [currentGrade, yearlyGradesData, currentBoard]);

  const boardsTab = ["CBSE", "ICSE", "Advance Level"];

  const detailsBarData = useSelector((state) => state.yearly.filteredBoards);
  const selectedBoard = detailsBarData[currentBoard] || {};
  return (
    <>
      <div className="board-buttons">
        <Dropdown setCurrentGrade={setCurrentGrade} />
        {boardsTab.map((item, index) => (
          <button
            onClick={(e) => handleClick(e, index)}
            className={board === index ? "active" : ""}
            value={item}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <DetailsBar selectedBoard={selectedBoard} />
      </div>
    </>
  );
};

export default YearlyCourses;
