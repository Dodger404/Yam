import { CartCard } from '@/components/ui/cards/cartCard'
import { menu } from '@/types/menu'

export const CartList = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      {menu.map(menu => (
        <CartCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
