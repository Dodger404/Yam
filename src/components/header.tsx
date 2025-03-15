import Image from 'next/image';

import { Basket } from '@/components/icons/basket';
import { Car } from '@/components/icons/car';
import { Chat } from '@/components/icons/chat';
import { LogoPC } from '@/components/icons/logoPC';
import { Storage } from '@/components/icons/storage';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-300 bg-white px-6 py-4">
      <LogoPC />
      <nav className="ml-auto flex items-center gap-6">
        <a
          href="#"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700"
        >
          <div className="relative">
            <Chat className="h-5 w-5" />
            <span className="absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
          </div>
          Чат поддержки
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700"
        >
          <div className="relative">
            <Car className="h-5 w-5" />
            <span className="absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
          </div>
          Отслеживание заказа
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700"
        >
          <div className="relative">
            <Storage className="h-5 w-5" />
            <span className="absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
          </div>
          Ваши заказы
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700"
        >
          <div className="relative">
            <Basket className="h-5 w-5" />
            <span className="absolute -right-0.5 top-0.5 h-2 w-2 rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
          </div>
          Корзина
        </a>
      </nav>
      <div className="ml-6 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-transparent transition-all hover:border-blue-600 active:border-2 active:border-blue-700">
        <Image
          src="/images/avatar.svg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
