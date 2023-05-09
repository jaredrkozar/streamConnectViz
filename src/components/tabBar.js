import { Tab, Popover } from '@headlessui/react'
import classNames from 'classnames';
import {appList} from "./tabBarItems"
import { LocationTable } from '../components/components'
import { DatesTable, SelectDatePopup } from '../components/calender'
import { useDispatch, useSelector } from 'react-redux';
import { Search, CalendarPlus } from "react-bootstrap-icons";

function Card(props) {
    return (
        <div className='relative'>
        <div className='flex w-full flex-wrap flex-row items-center justify-between px-2'>
            <div className='flex flex-col relative w-5/6'>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <h1>{props.subtitle}</h1>
            </div>
            <Popover className="relative">
                <Popover.Button>{props.popoverIcon}</Popover.Button>

                <Popover.Panel className="absolute z-10 right-0 bg-white shadow-md dark:bg-slate-700 w-96 rounded-lg">
                    {props.popoverPanel}
                </Popover.Panel>
            </Popover>
        </div>
        {props.children}
    </div>
    )
}
export function TabBar() {
  const dispatch = useDispatch()
    return (
        <div className=''>

<Tab.Group>
        <Tab.List className="transition-width ease flex space-x-1 pointer-events-none relative h-14 flex rounded-xl bg-slate-400 dark:bg-navyBlue-900 p-2 w-fit">
        {
          appList.map((tab) => (
            <Tab key={tab.name} className={({ selected }) =>
            classNames('focus:outline-none transition-width duration-500 ease p-4 pointer-events-auto inline-flex items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden',
            selected ? 'w-12 lg:w-fit bg-navyBlue-500 dark:bg-navyBlue-600' : "dark:hover:bg-navyBlue-700 hover:bg-navyBlue-400/75 hover:ease-out duration-500 w-12 pl-2")}
            >
              <div className='items-center'>{tab.icon}</div>
              <div className='whitespace-nowrap focus-within:w-40'>{tab.name}</div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>

          <Tab.Panel>
            
            <Card title="Location List" subtitle="View, edit, and add to your list of selected locations">
            <LocationTable></LocationTable>
                </Card>
            </Tab.Panel>

          <Tab.Panel>
            
            <Card title="Date List" subtitle="View, edit, and add to your list of selected dates. The map is updated automatically when you add or remove a date" popoverIcon={<CalendarPlus size={28}/>} popoverPanel={<SelectDatePopup></SelectDatePopup>}>
            <DatesTable></DatesTable>
                </Card>
            </Tab.Panel>

        </Tab.Panels>

      </Tab.Group>
        </div>
    )
}