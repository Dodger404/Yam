import { Car } from '@/components/car';
import { Chat } from '@/components/chat';
import { Storage } from '@/components/storage';
import { Basket } from '@/components/basket';
import { LogoPC } from '@/components/logoPC';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300 bg-white w-full">
        <LogoPC />
      <nav className="flex items-center gap-6 ml-auto">
        <a href="#" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700 group">
            <div className="relative">
                <Chat className="w-5 h-5" />
                <span className="absolute top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
            </div>
          Чат поддержки
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700 group">
            <div className="relative">
                <Car className="w-5 h-5" />
                <span className="absolute top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
            </div>
          Отслеживание заказа
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700 group">
            <div className="relative">
                <Storage className="w-5 h-5" />
                <span className="absolute top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
            </div>
          Ваши заказы
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 active:text-blue-700 group">
            <div className="relative">
                <Basket className="w-5 h-5" />
                <span className="absolute top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></span>
            </div>
            Корзина
        </a>
      </nav>
      <div className="w-10 h-10 rounded-full overflow-hidden border border-transparent hover:border-blue-600 active:border-2 active:border-blue-700 transition-all ml-6 flex items-center justify-center">
        <Image src="/images/avatar.svg" alt="Profile" width={40} height={40} className="rounded-full" />
      </div>
    </header>
  );
}
