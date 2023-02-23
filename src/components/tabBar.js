import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import {appList} from "./tabBarItems"
import { LocationTable, SearchLocations } from '../components/components'
import { Images } from "react-bootstrap-icons";
import {store} from "../store";
import { addImage } from "../imageManager";
import { useDispatch, useSelector } from 'react-redux';

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
          <Tab.Panel><LocationTable></LocationTable></Tab.Panel>
          <Tab.Panel><SearchLocations></SearchLocations></Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

            <div className='absolute top-0 right-0'>
              <button className='bg-navyBlue-500 hover:bg-navyBlue-600 dark:bg-navyBlue-600 dark:hover:bg-navyBlue-700 hover:ease-out duration-500 w-20 lg:w-fit h-14 p-2 pointer-events-auto flex flex-row items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden' onClick={event => ImageButtonClicked(dispatch)}>
                <div className='items-center'>Get Images</div>
                <Images size={26}></Images>
              </button>
            </div>
        </div>


    )
}

function ImageButtonClicked(dispatch) {
    const state = store.getState()
    const locationarray = state.locationStore.initialArray
    dispatch(addImage({locations: locationarray, date: '17-07-03'}))
}