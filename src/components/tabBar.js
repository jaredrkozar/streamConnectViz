import { Tab } from '@headlessui/react'
import { ButtonCreator, LocationTable, Map, SearchBar } from '../components/components'

export function TabBar() {
    return (
        <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900">
          <Tab>Location List</Tab>
          <Tab>Search Locations</Tab>
          <Tab>Select Date</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><LocationTable></LocationTable></Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    )
}