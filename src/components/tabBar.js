import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import {appList} from "./tabBarItems"
import { ButtonCreator, LocationTable, Map, SearchLocations } from '../components/components'
import { useState } from "react";
import { Image } from "react-bootstrap-icons";

export function TabBar() {
    return (
        <div className=''>

<Tab.Group>
        <Tab.List className="transition-width ease flex space-x-1 pointer-events-none relative h-14 flex rounded-xl bg-navyBlue-900 p-2 w-fit">
        {
          appList.map((tab) => (
            <Tab key={tab.name} className={({ selected }) =>
            classNames('focus:outline-none transition-width duration-500 ease p-4 pointer-events-auto inline-flex items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden',
            selected ? 'w-fit bg-navyBlue-600' : "hover:bg-navyBlue-600/75 hover:ease-out duration-500 w-12 pl-2")}
            >
              <div className='items-center'>{tab.icon}</div>
              <div className='whitespace-nowrap focus-within:w-40'>{tab.name}</div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><LocationTable></LocationTable></Tab.Panel>
          <Tab.Panel><SearchLocations></SearchLocations></Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

            <div className='absolute top-0 right-0'>
              <button className='pl-2 pr-2 h-14 bg-navyBlue-600 hover:bg-navyBlue-700 pointer-events-auto inline-flex items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden'>
                  <Image></Image>
                  <h5>Get Pictures</h5>
              </button>
            </div>
        </div>


    )
}