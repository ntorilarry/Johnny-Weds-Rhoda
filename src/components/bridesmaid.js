import React from "react";
import { TabGroup } from "@statikly/funk";

const Bridesmaid = () => {
  return (
    <div className="h-[60vh] w-screen flex flex-col justify-center items-center">
      <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-6 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Bridesmaid
          </TabGroup.Tab>

          <TabGroup.Tab
            index={1}
            className="h-12 px-6 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Groomsmen
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="p-16 transition-all transform h-64"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 1
        </TabGroup.TabPanel>

        <TabGroup.TabPanel
          index={1}
          className="p-16 transition-all transform h-64"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 3
        </TabGroup.TabPanel>
      </TabGroup>
    </div>
  );
};
export default Bridesmaid;
