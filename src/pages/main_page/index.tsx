import React, { useState } from 'react';
import '@/styles/globals.css';
import HeaderMobile from '@/components/header_mobile';
import Tabs from '@/components/tabs';
import Filters from '@/components/filters';
import RestaurantList from '@/components/restaurant_list';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all');

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.png')] bg-fixed bg-cover bg-center">
      <HeaderMobile />
      <div className="flex flex-col items-start px-5 py-5 gap-7 w-full">
        <h1 className="text-2xl font-bold font-roboto text-gray-800">Все рестораны</h1>
        <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
        <Filters />
        <RestaurantList />
      </div>
    </div>
  );
}
