import { Menu } from '../../types/menu'
import { CartCard } from '../ui/cards/cartCard'

export const CartList = ({ items }: { items: Menu[] }) => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      {items.map(menu => (
        <CartCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
