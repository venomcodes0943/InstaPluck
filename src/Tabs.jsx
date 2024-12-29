import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const TAB_VALUES = ["Reels", "Story", "Picture"];

  return (
    <center className="pt-8">
      <div role="tablist" className="max-w-md tabs tabs-lifted">
        {TAB_VALUES.map((value, index) => (
          <div
            key={index}
            role="tab"
            onClick={() => setActiveTab(index)}
            className={`tab ${activeTab === index ? "tab-active" : ""}`}
          >
            {value}
          </div>
        ))}
      </div>
    </center>
  );
};

export default Tabs;
