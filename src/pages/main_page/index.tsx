import React, { useState } from 'react';
import '@/styles/globals.css';
import HeaderMobile from '@/components/header_mobile';
import Tabs from '@/components/tabs';
import Filters from '@/components/filters';
import { RestaurantList, RestaurantListPC } from '@/components/restaurant_list';
import Header from '@/components/header';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all');

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.png')] bg-fixed bg-cover bg-center lg:bg-gray-100 lg:bg-none">
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="flex flex-col items-center px-5 py-5 gap-7 w-full max-w-screen-xl mx-auto lg:px-12 lg:py-8">
        <h1 className="text-2xl font-bold font-roboto text-gray-800 text-center lg:text-3xl">Все рестораны</h1>
        <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
        <div className="w-full lg:self-start">
          <Filters />
        </div>
        <div className="block lg:hidden">
          <RestaurantList />
        </div>
        <div className="hidden lg:block">
          <RestaurantListPC />
        </div>
        <h2 className="self-start hidden lg:block text-2xl font-bold font-roboto text-gray-800 text-left">Недавно заказывали</h2>
        <div className="hidden lg:block">
          <RestaurantListPC />
        </div>
        <h2 className="self-start hidden lg:block text-2xl font-bold font-roboto text-gray-800 text-left">Избранные рестораны</h2>
        <div className="hidden lg:block">
          <RestaurantListPC />
        </div>
      </div>
    </div>
  );
}

