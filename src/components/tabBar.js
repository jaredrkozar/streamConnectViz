import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import {appList} from "./tabBarItems"
import { ButtonCreator, LocationTable, Map, SearchLocations } from '../components/components'

export function TabBar() {
    return (
        <Tab.Group>
        <Tab.List className="relative h-14 flex rounded-xl bg-[#000921] p-2">
        {
          appList.map((tab) => (
            <Tab
            className={({ selected }) =>
            classNames('flex flex-row gap-x-4 items-center justify-center w-full rounded-lg text-xl font-medium text-white',
            selected ? 'bg-blue-500' : "")}
            >
              {tab.icon}
           {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><LocationTable></LocationTable></Tab.Panel>
          <Tab.Panel><SearchLocations></SearchLocations></Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    )
}