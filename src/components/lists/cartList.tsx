import { CartCard } from '@/components/cards/cartCard'
import { menu } from '@/data/menu'

export const CartList = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      {menu.map(menu => (
        <CartCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
