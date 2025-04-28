import { MenuCard } from '@/components/ui/cards/menuCard'
import { menu } from '@/data/menu'

export const MenuList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {menu.map(menu => (
        <MenuCard key={menu.name} {...menu} />
      ))}
    </div>
  )
}
