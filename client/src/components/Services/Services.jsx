'use client';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Photography from './Photography';
import Mining from './Mining';
import Security from './Security';
import Videography from './Videography';
import Agriculture from './Agriculture';

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <Tabs>
        <TabList className="flex space-x-4 mb-4 border-b border-red-500">
          <Tab className="py-2 px-4 cursor-pointer hover:text-red-500 focus:outline-none text-lg ">
            Photography
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer hover:text-red-500 focus:outline-none text-lg ">
            Mining
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer hover:text-red-500 focus:outline-none text-lg ">
            Security
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer hover:text-red-500 focus:outline-none text-lg ">
            Videography
          </Tab>
          <Tab className="py-2 px-4 cursor-pointer hover:text-red-500 focus:outline-none text-lg ">
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
