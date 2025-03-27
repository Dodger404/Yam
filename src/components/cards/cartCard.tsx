import { useState } from 'react'
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'

import { Menu } from '@/data/menu'

export const CartCard: React.FC<Menu> = ({ name, price, description, image }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-[5rem_1fr_auto] grid-rows-[auto_auto_auto] gap-y-2 rounded-md bg-white px-4 py-3 shadow-md lg:px-4 lg:pb-4 lg:pt-3'>
      <img
        src={image}
        alt={name}
        className='col-start-1 row-span-2 row-start-1 h-20 w-20 rounded-md object-cover'
      />
      <h3 className='col-start-2 row-start-1 ml-3 self-center text-xs text-gray-800 lg:text-sm'>
        {name}
      </h3>
      <button
        type='button'
        aria-label='Закрыть меню'
        className='col-start-3 row-start-1 flex h-6 w-6 items-center justify-center justify-self-end'
      >
        <XMarkIcon aria-hidden='true' className='h-4 w-4 scale-125' />
      </button>
      <p className='col-span-2 col-start-2 row-start-2 ml-3 line-clamp-3 text-left text-xs text-gray-600'>
        {description}
      </p>
      <span className='font-roboto col-start-1 row-start-3 self-end overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold text-green-500'>
        {price}
      </span>
      <div className='col-span-3 col-start-2 row-start-3 mt-auto flex w-full items-center gap-1'>
        <button
          type='button'
          aria-label='Убрать'
          className='flex h-9 w-10 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
          onClick={() => setCount(prev => Math.max(0, prev - 1))}
        >
          <MinusIcon className='h-4 w-4 text-white' />
        </button>
        <div className='flex h-9 flex-1 items-center justify-center rounded-md border border-gray-300 bg-white text-base font-bold text-gray-800'>
          {count}
        </div>
        <button
          type='button'
          aria-label='Добавить'
          className='flex h-9 w-10 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
          onClick={() => setCount(prev => prev + 1)}
        >
          <PlusIcon className='h-4 w-4 text-white' />
        </button>
      </div>
    </div>
  )
}
