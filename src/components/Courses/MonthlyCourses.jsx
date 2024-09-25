import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setBoardsData } from "../../redux/slices/boardSlice";
import "../../App.css";

const MonthlyCourses = () => {
  const [currentGrade, setCurrentGrade] = useState("Grade 6");
  const monthlyGradesData = useSelector(
    (state) => state.pricing.monthlyGradesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let filtered = monthlyGradesData.filter(
      (item) => item.grade == currentGrade
    );
    dispatch(setBoardsData(filtered[0]));
  }, [currentGrade]);

  const monthlySessions = useSelector((state) => state.board.sessions);

  return (
    <>
      <Dropdown setCurrentGrade={setCurrentGrade} />
      <div style={{ marginTop: "1rem" }}>
        {monthlySessions.map((item, index) => (
          <label htmlFor={item.type} key={index}>
            <div className="session-container">
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="session-data"
              >
                <input
                  type="radio"
                  id={item.type}
                  name="monthlySession"
                  value={item.type}
                  style={{ marginRight: "1rem" }}
                />
                <div className="flex-col">
                  <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    {item.valid}
                  </span>
                  <span style={{ fontSize: "0.9rem" }}>{item.refund}</span>
                </div>
              </div>

              <div className="flex-col session-data data2">
                <div
                  style={{
                    fontSize: "1.2rem",
                    color: "#FEE101",
                    fontWeight: "bold",
                  }}
                >
                  <span>₹{item.price}</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "1rem",
                      fontSize: "1rem",
                    }}
                  >
                    ₹
                    {Math.round(
                      item.price / (1 - parseFloat(item.discount) / 100)
                    )}
                  </span>
                </div>
                <div className="monthly-course-discount">
                  {item.discount} OFF
                </div>
              </div>

              <div className="session-data data3">
                <div
                  className="flex-col"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.per_class_price} per session
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#f2f2f2",
                    }}
                  >
                    {item.total_sessions} sessions
                  </span>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default MonthlyCourses;
