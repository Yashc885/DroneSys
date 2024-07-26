'use client';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Photography from './Photography';
import Mining from './Mining';
import Security from './Security';
import Videography from './Videography';
import Agriculture from './Agriculture';
import { useState } from 'react';

const Services = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="mx-auto py-4 px-4 mt-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <Tabs onSelect={handleTabSelect} selectedIndex={selectedTabIndex}>
        <TabList className="flex flex-wrap space-x-2 mb-4 border-b border-red-500">
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 0 ? 'text-red-500 border-b-2 border-red-500' : 'hover:text-red-500'
            }`}
          >
            Photography
          </Tab>
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 1 ? 'text-red-500 border-b-2 border-red-500' : 'hover:text-red-500'
            }`}
          >
            Mining
          </Tab>
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 2 ? 'text-red-500 border-b-2 border-red-500' : 'hover:text-red-500'
            }`}
          >
            Security
          </Tab>
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 3 ? 'text-red-500 border-b-2 border-red-500' : 'hover:text-red-500'
            }`}
          >
            Videography
          </Tab>
          <Tab
            className={`py-2 px-4 cursor-pointer text-base sm:text-lg ${
              selectedTabIndex === 4 ? 'text-red-500 border-b-2 border-red-500' : 'hover:text-red-500'
            }`}
          >
            Agriculture
          </Tab>
        </TabList>
        <TabPanel>
          <Photography />
        </TabPanel>
        <TabPanel>
          <Mining />
        </TabPanel>
        <TabPanel>
          <Security />
        </TabPanel>
        <TabPanel>
          <Videography />
        </TabPanel>
        <TabPanel>
          <Agriculture />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;
