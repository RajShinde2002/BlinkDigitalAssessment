import React, { useState } from "react";
import MonthlyCourses from "./Courses/MonthlyCourses";
import YearlyCourses from "./Courses/YearlyCourses";
import Footer from "./Footer";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <YearlyCourses activeTab={activeTab} />;
      case 1:
        return <MonthlyCourses activeTab={activeTab} />;
      default:
        return <YearlyCourses activeTab={activeTab} />;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab} Courses
          </button>
        ))}
      </div>

      <div className="tab-content">{renderTabContent()}</div>
      <Footer activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
