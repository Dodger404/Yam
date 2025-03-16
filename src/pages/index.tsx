import React, { useState } from 'react';

import Filters from '@/components/filters';
import Header from '@/components/header';
import HeaderMobile from '@/components/headerMobile';
import { RestaurantList, RestaurantListPC } from '@/components/restaurantList';
import Tabs from '@/components/tabs';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all');

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-7 px-5 py-5 lg:px-12 lg:py-8">
        <h1 className="font-roboto text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          Все рестораны
        </h1>
        <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
        <Filters />
        <RestaurantList />
        <RestaurantListPC />
        <h2 className="font-roboto hidden self-start text-left text-2xl font-bold text-gray-800 lg:block">
          Недавно заказывали
        </h2>
        <RestaurantListPC />
        <h2 className="font-roboto hidden self-start text-left text-2xl font-bold text-gray-800 lg:block">
          Избранные рестораны
        </h2>
        <RestaurantListPC />
      </div>
    </div>
  );
}
