import React, { Dispatch, SetStateAction, useState } from "react";

const tabs = [
  { id: 1, tab: "Upcoming Election", value: "upcoming" },
  { id: 2, tab: "Candidates", value: "candidate" },
  { id: 3, tab: "Past Elections", value: "past-elections" },
];
const MenuTabs = ({ selectedTab, setSelectedTab }: { selectedTab: string; setSelectedTab: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="border-b border-[#F5F5F5]">
      <div className="flex gap-x-[20px] px-[20px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              selectedTab === tab.value
                ? "text-[#121212] text-sm cursor-pointer font-semibold border-b-2 border-[#FE9206] pb-[20px]"
                : "text-[#8A8A8A] text-xs cursor-pointer pb-[20px]"
            }
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
