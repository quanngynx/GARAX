import { useState } from "react";

import Line from "../../../components/line";
import LineChild from "./lineChild";

function accessibleTabs({ tabsConfig, defaultIndex }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  const handleClick = (index) => setSelectedIndex(index);
  return (
    <div className="w-full ">
      <div className="my-8">
        {tabsConfig.map((tab, index) => (
          <button
            className="text-[#050b20] text-base font-medium font-['DM Sans'] leading-[29.60px] mr-10"
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-8">
      <LineChild  width={48} height={2}/>
      <Line />
      </div>

      {/* Show product */}
      <div className="tabpanel-wrapper">
        {tabsConfig.map((tab, index) => (
          <section
            className="text-base font-medium font-['DM Sans'] leading-[29.60px]"
            key={`tabpanel-${index}`}
            hidden={selectedIndex !== index}
          >
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  );
}

export default accessibleTabs;
