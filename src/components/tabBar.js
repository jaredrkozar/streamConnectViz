import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import {appList} from "./tabBarItems"
import { ButtonCreator, LocationTable, Map, SearchLocations } from '../components/components'
import { useState } from "react";

export function TabBar() {
    return (
        <div className=''>

<Tab.Group>
        <Tab.List className="flex space-x-1 pointer-events-none relative h-14 flex rounded-xl bg-[#000921] p-2 w-fit">
        {
          appList.map((tab) => (
            <Tab key={tab.name} className={({ selected }) =>
            classNames('p-4 pointer-events-auto inline-flex items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden',
            selected ? 'bg-blue-500' : "hover:bg-blue-500/75 hover:animate-fade-in-down w-12 pl-2")}
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

        </div>


    )
}