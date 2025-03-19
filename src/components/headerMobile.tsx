import Link from 'next/link'

import { Basket } from '@/components/icons/basket'
import { BMenu } from '@/components/icons/bMenu'
import { Logo } from '@/components/icons/logo'

export default function HeaderMobile() {
  return (
    <header className='flex items-center justify-between rounded-b-xl bg-white p-4 pb-3 pl-10 pr-10 pt-2 lg:hidden'>
      <Link href='/burgerMenu'>
        <button
          type='button'
          aria-label='Открыть меню'
          className='flex h-7 w-7 items-center justify-center'
        >
          <BMenu aria-hidden='true' className='h-6 w-6' />
        </button>
      </Link>
      <Logo aria-hidden='true' />
      <button
        type='button'
        aria-label='Открыть корзину'
        className='flex h-7 w-7 items-center justify-center'
      >
        <Basket aria-hidden='true' className='h-6 w-6' />
      </button>
    </header>
  )
}
