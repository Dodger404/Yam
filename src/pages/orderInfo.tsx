import React from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import { DishCard } from '@/components/cards/dish'
import Header from '@/components/headers/header'
import HeaderMobile from '@/components/headers/headerMobile'
import { Star } from '@/components/icons/star'

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <div className='flex items-center gap-2'>
          <ArrowLongLeftIcon aria-hidden='true' className='h-6 w-6 text-gray-800 lg:hidden' />
          <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>
            Информация о заказе
          </h1>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300'>
            <div className='flex'>
              <div className='flex w-full gap-3'>
                <span className='text-sm font-bold text-gray-500'>20 ноября 2024</span>
                <span className='text-sm font-bold text-gray-500'>14:35</span>
              </div>
              <span className='text-right text-sm text-green-500'>Доставлен</span>
            </div>
            <h3 className='text-sm font-bold text-gray-800'>«Трапеза Ярополка»</h3>
            <div className='flex flex-col gap-1'>
              <DishCard />
              <DishCard />
            </div>
            <div className='flex justify-end gap-2'>
              <span className='self-end text-xs text-gray-600'>Итого:</span>
              <span className='text-sm font-bold text-gray-800'>1 500 ₽</span>
            </div>
            <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
            <div className='flex flex-col gap-2'>
              <span className='text-xs text-gray-800'>Детали доставки:</span>
              <div className='flex items-center justify-start gap-2'>
                <span className='text-xs text-gray-400'>Адрес</span>
                <span className='line-clamp-3 break-words text-xs text-gray-800'>
                  г. Москва, ул. Примерная, д.5
                </span>
              </div>
              <div className='flex items-center justify-start gap-2'>
                <span className='text-xs text-gray-400'>Оплата</span>
                <span className='mt-[-2] line-clamp-2 break-words text-sm text-gray-800'>
                  Онлайн, карта *4425
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-gray-400'>Курьер</span>
                <div className='flex justify-between'>
                  <span className='text-xs text-gray-800'>Доброгост Сварожич</span>
                  <span className='text-xs text-gray-800'>+7 900 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <button
            type='button'
            className='rounded-md border-2 border-gray-300 bg-transparent px-4 py-2 text-base font-bold text-gray-800 hover:border-gray-600 active:border-gray-800'
          >
            Повторить заказ
          </button>
        </div>
        <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300'>
          <div className='flex flex-col gap-4'>
            <h3 className='font-roboto text-base font-bold text-gray-800'>Оценить заказ</h3>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-start gap-3'>
                <span className='text-base text-gray-600'>Ресторан:</span>
                <div className='flex w-full justify-between'>
                  {Array.from({ length: 5 }).map(_ => (
                    <Star className='h-6 w-6 fill-white stroke-gray-800' />
                  ))}
                </div>
              </div>
              <div className='flex justify-start gap-3'>
                <span className='text-base text-gray-600'>Доставка:</span>
                <div className='flex w-full justify-between'>
                  {Array.from({ length: 5 }).map(_ => (
                    <Star className='h-6 w-6 fill-white stroke-gray-800' />
                  ))}
                </div>
              </div>
            </div>
            <form className='flex flex-col gap-2.5'>
              <span className='text-sm text-gray-500'>Ваш отзыв</span>
              <textarea
                id='review'
                placeholder='Что Вам понравилось?'
                minLength={1}
                maxLength={1000}
                className='text-top h-[7.5rem] rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
              />
              <button
                type='submit'
                className='rounded-md bg-blue-500 py-2 text-base font-bold text-gray-100 hover:bg-blue-600 active:bg-blue-700'
              >
                Оставить отзыв
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
