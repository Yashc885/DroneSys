'use client'
import React , { useState} from 'react'
import Recent from './Recent';
import Past from './Past';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Chechout = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const handleTabSelect = (index) => {
      setSelectedTabIndex(index);
    };

  return (
    <>
    <div className="mx-auto py-4  mt-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Application</h1>
      <div className="py-4 md:py-6"></div>
      <div className="items-center ">
      <Tabs onSelect={handleTabSelect} selectedIndex={selectedTabIndex}>
        <TabList className="flex flex-wrap space-x-2 mb-4 border-b border-red-500 pl-2 md:pl-4 ">
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg  ${
              selectedTabIndex === 0 ? 'text-red-500  border-red-500' : 'hover:text-red-500' 
            }`}
          >
            Recent Application
          </Tab>
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 1 ? 'text-red-500  border-red-500' : 'hover:text-red-500 '
            }`}
          >
            Past Application
          </Tab>
        </TabList>
        <TabPanel>
          <Recent />
        </TabPanel>
        <TabPanel>
          <Past />
        </TabPanel>
      </Tabs>
      </div>
    </div>
    </>
  )
}

export default Chechout