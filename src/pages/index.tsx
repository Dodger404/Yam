import React, { useState } from 'react'

import { Filters } from '@/components/filters'
import Header from '@/components/headers/header'
import HeaderMobile from '@/components/headers/headerMobile'
import { RestaurantList } from '@/components/lists/restaurantList'
import Tabs from '@/components/tabs'

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('all')

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-7 px-5 py-5 lg:items-center lg:px-12 lg:py-8'>
        <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>Все рестораны</h1>
        <div className='lg:hidden'>
          <Tabs activeTab={activeTab} onChangeTab={handleChangeTab} />
        </div>
        <Filters />
        <RestaurantList />
        <h2 className='font-roboto hidden self-start text-left text-2xl font-bold text-gray-800 lg:block lg:pt-6'>
          Недавно заказывали
        </h2>
        <RestaurantList />
        <h2 className='font-roboto hidden self-start text-left text-2xl font-bold text-gray-800 lg:block lg:pt-6'>
          Избранные рестораны
        </h2>
        <RestaurantList />
      </div>
    </div>
  )
}
