import { useState } from 'react'

import { Basket } from '../../icons/basket'
import { BMenu } from '../../icons/bMenu'
import { Logo } from '../../icons/logo'
import BurgerMenu from '../burgerMenu'

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className='flex items-center justify-between rounded-b-xl bg-white p-4 pb-3 pl-10 pr-10 pt-2 lg:hidden'>
        <button
          type='button'
          aria-label='Открыть меню'
          className='flex h-7 w-7 items-center justify-center'
          onClick={() => setMenuOpen(true)}
        >
          <BMenu aria-hidden='true' className='h-6 w-6' />
        </button>
        <Logo aria-hidden='true' />
        <button
          type='button'
          aria-label='Открыть корзину'
          className='flex h-7 w-7 items-center justify-center'
        >
          <Basket aria-hidden='true' className='h-6 w-6' />
        </button>
      </header>
      {menuOpen && <BurgerMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}
