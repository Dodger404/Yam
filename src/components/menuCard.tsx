import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

import { Basket } from '@/components/icons/basket'
import { Menu } from '@/data/menu'

export const MenuCard: React.FC<Menu> = ({ name, price, description, image }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-full flex-col gap-2 rounded-md bg-white px-4 pb-3 pt-2 shadow-md lg:px-4 lg:pb-4 lg:pt-3'>
      <img src={image} alt={name} className='h-32 w-full rounded-xl object-cover' />
      <div className='flex items-center justify-between gap-1'>
        <span className='font-roboto flex items-center text-xl font-bold text-green-500 lg:hidden'>
          {price}
        </span>
        <h3 className='text-xs text-gray-800 lg:text-sm'>{name}</h3>
      </div>
      <p className='line-clamp-3 flex-1 text-left text-xs text-gray-600'>{description}</p>
      <span className='font-roboto hidden text-xl font-bold text-green-500 lg:block'>{price}</span>
      {count === 0 ? (
        <button
          type='button'
          aria-label='Добавить в корзину'
          className='mt-auto flex w-full items-center justify-center rounded-md bg-blue-500 py-2 hover:bg-blue-600 active:bg-blue-700'
          onClick={() => setCount(1)}
        >
          <Basket className='h-6 w-6 text-white' />
        </button>
      ) : (
        <div className='mt-auto flex w-full items-center gap-1'>
          <button
            type='button'
            aria-label='Убрать'
            className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
            onClick={() => setCount(prev => Math.max(0, prev - 1))}
          >
            <MinusIcon className='h-5 w-5 text-white' />
          </button>

          <div className='flex h-10 flex-1 items-center justify-center rounded-md border border-gray-300 bg-white text-base font-bold text-gray-800'>
            {count}
          </div>

          <button
            type='button'
            aria-label='Добавить'
            className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
            onClick={() => setCount(prev => prev + 1)}
          >
            <PlusIcon className='h-5 w-5 text-white' />
          </button>
        </div>
      )}
    </div>
  )
}
