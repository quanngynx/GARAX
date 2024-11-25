import { useState } from "react";
import { accessibleTabsInterface } from "../../../interfaces/accessibleTabs";
import Line from "../../../components/line/line";
import LineChild from "./lineChild";

function accessibleTabs({ tabsConfig, defaultIndex }: accessibleTabsInterface) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index: string) => setSelectedIndex(index);

  if (!tabsConfig) {
    return <div>No configuration available.</div>
  }

  const handleButtonTabs = () => {
    if(Array.isArray(tabsConfig)) {
       return tabsConfig.map((tab: { label: string , index: string }) => (
        <button
          className="text-[#050b20] text-base font-medium font-['DM Sans'] leading-[29.60px] mr-10"
          key={`tab-${tab.index}`}
          onClick={() => handleClick(tab.index)}
        >
          {tab.label}
        </button>
      ))
    }
  }

  const handleSectionTabs = () => {
    if(Array.isArray(tabsConfig)) {
      return tabsConfig.map((tab: { content: string , index: number }) => (
        <section
          className="text-base font-medium font-['DM Sans'] leading-[29.60px]"
          key={`tabpanel-${tab.index}`}
          hidden={selectedIndex !== tab.index}
        >
          {tab.content}
        </section>
      ))
    }
  }
  return (
    <div className="w-full ">
      <div className="my-8">
        {handleButtonTabs()}
      </div>

      <div className="mb-8">
      <LineChild  width={48} height={2}/>
      <Line />
      </div>

      {/* Show product */}
      <div className="tabpanel-wrapper">
        {handleSectionTabs()}
      </div>
    </div>
  );
}

export default accessibleTabs;
