import React from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import { FiltersMenu } from '@/components/filters'
import Header from '@/components/headers/header'
import HeaderMobile from '@/components/headers/headerMobile'
import { MenuList } from '@/components/lists/menuList'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <div className='flex items-center gap-2'>
          <ArrowLongLeftIcon className='h-6 w-6 text-gray-800' />
          <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>
            Трапеза Ярополка
          </h1>
        </div>
        <FiltersMenu />
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800'>Супы</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Основные блюда</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Десерты</h2>
          <MenuList />
        </section>
        <section className='flex flex-col gap-6'>
          <h2 className='font-roboto text-2xl font-bold text-gray-800 lg:pt-6'>Напитки</h2>
          <MenuList />
        </section>
      </div>
    </div>
  )
}
