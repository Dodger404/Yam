import React from 'react'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

import { DishCard } from '@/components/cards/dish'
import Header from '@/components/headers/header'
import HeaderMobile from '@/components/headers/headerMobile'
import { Star } from '@/components/icons/star'

export default function OrderInfoPage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <div className='flex items-center gap-2'>
          <ArrowLongLeftIcon aria-hidden='true' className='h-6 w-6 text-gray-800' />
          <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>
            Информация о заказе
          </h1>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-3'>
          <div className='flex flex-col gap-3 lg:w-1/2'>
            <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300 lg:gap-4'>
              <div className='flex justify-start'>
                <div className='flex w-full gap-3'>
                  <span className='text-sm font-bold text-gray-500 lg:text-base'>
                    20 ноября 2024
                  </span>
                  <span className='text-sm font-bold text-gray-500 lg:text-base'>14:35</span>
                </div>
                <span className='text-sm text-green-500 lg:text-base'>Доставлен</span>
              </div>
              <h3 className='lg:font-roboto text-sm font-bold text-gray-800 lg:text-xl'>
                «Трапеза Ярополка»
              </h3>
              <div className='flex flex-col gap-1'>
                <DishCard />
                <div aria-hidden='true' className='hidden h-px w-full bg-gray-300 lg:block'></div>
                <DishCard />
                <div aria-hidden='true' className='hidden h-px w-full bg-gray-300 lg:block'></div>
              </div>
              <div className='flex justify-end gap-2'>
                <span className='self-end text-xs text-gray-600 lg:text-sm'>Итого:</span>
                <span className='lg:font-roboto text-sm font-bold text-gray-800 lg:text-xl'>
                  1 500 ₽
                </span>
              </div>
              <div aria-hidden='true' className='h-px w-full bg-gray-300 lg:hidden'></div>
              <div className='flex flex-col gap-2 lg:gap-4'>
                <span className='text-xs text-gray-800 lg:text-sm lg:font-bold'>
                  Детали доставки:
                </span>
                <div className='flex flex-col gap-2 xl:flex-row xl:justify-between'>
                  <div className='flex items-center justify-start gap-2'>
                    <span className='text-xs text-gray-400'>Адрес</span>
                    <span className='line-clamp-3 break-words text-xs text-gray-800 lg:text-base'>
                      г. Москва, ул. Примерная, д.5
                    </span>
                  </div>
                  <div className='flex items-center justify-start gap-2'>
                    <span className='text-xs text-gray-400'>Оплата</span>
                    <span className='mt-[-2] line-clamp-2 break-words text-sm text-gray-800 lg:mt-0 lg:text-base'>
                      Онлайн, карта *4425
                    </span>
                  </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-2'>
                  <span className='text-xs text-gray-400'>Курьер</span>
                  <div className='flex justify-between lg:gap-2'>
                    <span className='line-clamp-2 break-words text-xs text-gray-800 lg:text-base'>
                      Доброгост Сварожич
                    </span>
                    <span className='line-clamp-2 break-words text-xs text-gray-800 lg:text-base'>
                      +7 900 123-45-67
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type='button'
              className='rounded-md border-2 border-gray-300 bg-transparent px-4 py-2 text-base font-bold text-gray-800 hover:border-gray-600 active:border-gray-800 lg:w-[11rem]'
            >
              Повторить заказ
            </button>
          </div>
          <div className='flex h-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-6 shadow-md shadow-gray-300 lg:w-1/2'>
            <div className='flex flex-col gap-4'>
              <h3 className='font-roboto text-base font-bold text-gray-800 lg:text-xl'>
                Оценить заказ
              </h3>
              <div className='flex flex-col gap-3 xl:flex-row xl:justify-between'>
                <div className='flex justify-start gap-3'>
                  <span className='text-base text-gray-600'>Ресторан:</span>
                  <div className='flex w-full justify-between md:justify-normal md:space-x-2'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className='h-6 w-6 fill-white stroke-gray-800' />
                    ))}
                  </div>
                </div>
                <div className='flex justify-start gap-3'>
                  <span className='text-base text-gray-600'>Доставка:</span>
                  <div className='flex w-full justify-between md:justify-normal md:space-x-2'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className='h-6 w-6 fill-white stroke-gray-800' />
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
    </div>
  )
}
