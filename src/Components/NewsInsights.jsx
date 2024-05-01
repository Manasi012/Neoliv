import React from 'react';
import { useState } from 'react';
import AllNews from './Slider/AllNews';
import CeoLetter from './Slider/CeoLetter';
import Events from './Slider/Events';
import News from './Slider/News';

const NewsInsights = () => {

    const [activeTab, setActiveTab] = useState(1);


  return (
    <div>
      {/* Tab Pills */}
      <div className="flex md:space-x-7 space-x-4 md:mx-96 mx-5 pt-8">
        <button
          className={`flex-1 rounded-full border border-indigo-500  ${activeTab === 1 ? 'bg-indigo-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(1)}
        >
          All
        </button>
        <button
          className={`flex-1 py-2 rounded-full border border-indigo-500  ${activeTab === 2 ? 'bg-indigo-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(2)}
        >
          CEO's Letter
        </button>
        <button
          className={`flex-1 py-2 rounded-full border border-indigo-500  ${activeTab === 3 ? 'bg-indigo-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(3)}
        >
          Events
        </button>
        <button
          className={`flex-1 py-2 rounded-full border border-indigo-500  ${activeTab === 4 ? 'bg-indigo-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(4)}
        >
          News
        </button>
      </div>

      <div className="rounded-b-lg p-4">
        {activeTab === 1 && 
        <div>
          <AllNews />
        </div>}
         {activeTab === 2 && 
        <div>
          <CeoLetter />
        </div>}
        {activeTab === 3 &&
        <div>
          <Events />
        </div>}
        {activeTab === 4 && 
        <div>
          <News />
        </div>
          }
      </div>
    </div>
  )
}

export default NewsInsights
