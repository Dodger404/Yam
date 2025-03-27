import React from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import Header from '@/components/headers/header'
import HeaderMobile from '@/components/headers/headerMobile'
import { CartList } from '@/components/lists/cartList'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <div className='flex items-center gap-2'>
          <ArrowLongLeftIcon className='h-6 w-6 text-gray-800' />
          <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>Ваша корзина</h1>
        </div>
        <CartList />
      </div>
      <div className='flex w-full flex-col gap-1 rounded-2xl border border-gray-300 bg-white px-4 py-3'>
        <h3 className='text-base font-bold text-gray-800'>Общая сумма заказа</h3>
        <div className='flex w-full items-center justify-between'>
          <span className='font-roboto text-2xl font-bold text-green-500'>2 310 ₽</span>
          <span className='text-sm text-gray-600'>4 блюда</span>
        </div>
        <button
          type='submit'
          className='rounded-lg bg-blue-500 py-2 text-base font-bold text-gray-100 hover:bg-blue-600 hover:text-gray-100 active:bg-blue-700 active:text-white'
        >
          Оформление заказа
        </button>
      </div>
    </div>
  )
}
