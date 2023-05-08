import Sidebar from './sidebar/sidebar';
import MainPage from './sidebar/mainPage';
import React, { useState } from "react";

function App() {

  return (
    <div className='bg-white dark:bg-slate-800 dark:text-white'>
        <div className='flex flex-col h-screen'>
          <div className="w-screen h-1/2 relative">
            <Sidebar/>
          </div>
          <div className="w-screen h-1/2 relative">
          <MainPage/>
          </div>
        </div>
    </div>
  )
}

export default App;