import Link from 'next/link';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { Car } from '@/components/icons/car';
import { Chat } from '@/components/icons/chat';
import { Logo } from '@/components/icons/logo';
import { Storage } from '@/components/icons/storage';

export default function BurgerMenu() {
  return (
    <div className="flex min-h-screen flex-col gap-7 bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:hidden">
      <div className="flex w-full justify-between px-5 py-2">
        <Logo />
        <Link href="/" passHref>
          <button
            type="button"
            aria-label="Закрыть меню"
            className="flex h-6 w-6 items-center justify-center"
          >
            <XMarkIcon className="h-6 w-6 scale-125" />
          </button>
        </Link>
      </div>
      <nav className="flex w-full flex-col gap-6 px-5">
        <a href="#" className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-6 w-6" />
            <p className="text-base text-gray-800">Главная</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </a>
        <a href="#" className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6" />
            <p className="text-base text-gray-800">Отслеживание заказа</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </a>
        <a href="#" className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Chat className="h-6 w-6" />
            <p className="text-base text-gray-800">Чат поддержки</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </a>
        <a href="#" className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <UserIcon className="h-6 w-6" />
            <p className="text-base text-gray-800">Профиль</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </a>
        <a href="#" className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Storage className="h-6 w-6" />
            <p className="text-base text-gray-800">Ваши заказы</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </a>
      </nav>
    </div>
  );
}
