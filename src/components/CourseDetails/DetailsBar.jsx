import React from "react";
import "../../App.css";
import SyllabusDisplay from "./SyllabusDisplay";

const DetailItem = ({ heading, value }) => {
  return (
    <div className="flex-col">
      <span className="detail-heading">{heading}</span>
      <span className="detail-value">{value || "N/A"}</span>
    </div>
  );
};

const DetailsBar = ({ selectedBoard }) => {
  return (
    <div>
      <div className="detail-bar-container">
        <DetailItem
          heading="Total sessions"
          value={selectedBoard.total_sessions}
        />
        <DetailItem
          heading="Online Pre Assignments"
          value={selectedBoard.online_pre_assignments}
        />
        <DetailItem
          heading="Online Post Assignments"
          value={selectedBoard.online_post_assignments}
        />
        <DetailItem
          heading="Online Practice"
          value={selectedBoard.online_assignments}
        />
        <DetailItem heading="Online Tests" value={selectedBoard.online_tests} />
        <DetailItem
          heading="Career counselling sessions with Edu Coach"
          value={selectedBoard.career_counselling_sessions}
        />
      </div>

      <p className="detail-heading">Course Topic Includes</p>

      <SyllabusDisplay selectedBoard={selectedBoard} />
    </div>
  );
};

export default DetailsBar;
