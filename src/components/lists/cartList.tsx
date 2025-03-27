import { CartCard } from '@/components/cards/cartCard'
import { menu } from '@/data/menu'

export const CartList = () => {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {menu.map(menu => (
        <CartCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
