import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { LogoPC } from '@/components/icons/logoPC';
import { User } from '@/components/icons/user';

export default function HeaderLog() {
  return (
    <header className="hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:border-b lg:border-gray-300 lg:bg-white lg:px-6 lg:py-3.5">
      <LogoPC aria-hidden="true" />
      <div
        role="search"
        className="group relative flex min-w-[200px] max-w-lg flex-1 rounded-lg border-2 border-blue-500 focus-within:border-blue-700"
      >
        <input
          type="text"
          id="search"
          placeholder="Искать"
          className="w-full rounded-lg bg-white py-2 pl-4 pr-14 text-gray-800 placeholder-gray-400 focus:outline-none"
        />
        <button
          type="button"
          aria-label="Начать поиск"
          className="absolute right-0 top-0 flex h-full items-center justify-center rounded-r-sm bg-blue-500 px-5 transition hover:bg-blue-600 group-focus-within:bg-blue-700"
        >
          <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/login" className="group flex flex-col items-center gap-1">
          <User
            aria-hidden="true"
            className="h-6 w-6 stroke-current text-gray-800 group-hover:text-blue-600 group-active:text-blue-700"
          />
          <span className="text-xs text-gray-800 group-hover:text-blue-600 group-active:text-blue-700">
            Войти
          </span>
        </Link>
        <Link href="/registration">
          <button
            type="button"
            className="rounded-lg bg-blue-500 px-4 py-2 text-base font-bold text-white transition hover:bg-blue-600 active:bg-blue-700"
          >
            Зарегистрироваться
          </button>
        </Link>
      </div>
    </header>
  );
}
