import Link from 'next/link'
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { Car } from '../icons/car'
import { Chat } from '../icons/chat'
import { Logo } from '../icons/logo'

type BurgerMenuProps = {
  onClose: () => void
}

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  return (
    <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full flex-col gap-7 bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:hidden">
      <div className='flex w-full justify-between px-5 py-2'>
        <Logo aria-hidden='true' />
        <button
          type='button'
          aria-label='Закрыть меню'
          onClick={onClose}
          className='flex h-6 w-6 items-center justify-center'
        >
          <XMarkIcon aria-hidden='true' className='h-6 w-6 scale-125' />
        </button>
      </div>
      <nav role='navigation' aria-label='Навигация' className='flex w-full flex-col gap-6 px-5'>
        <Link href='/' className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <HomeIcon aria-hidden='true' className='h-6 w-6' />
            <span className='text-base text-gray-800'>Главная</span>
          </div>
          <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
        </Link>
        <a href='#' className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <Car aria-hidden='true' className='h-6 w-6' />
            <span className='text-base text-gray-800'>Отслеживание заказа</span>
          </div>
          <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
        </a>
        <a href='#' className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <Chat aria-hidden='true' className='h-6 w-6' />
            <span className='text-base text-gray-800'>Чат поддержки</span>
          </div>
          <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
        </a>
        <Link href='/login' className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <UserIcon aria-hidden='true' className='h-6 w-6' />
            <span className='text-base text-gray-800'>Профиль</span>
          </div>
          <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
        </Link>
        <a href='#' className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <Storage aria-hidden='true' className='h-6 w-6' />
            <span className='text-base text-gray-800'>Ваши заказы</span>
          </div>
          <div aria-hidden='true' className='h-px w-full bg-gray-300'></div>
        </a>
      </nav>
    </div>
  )
}
