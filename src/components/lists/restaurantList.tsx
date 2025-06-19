import { Restaurant } from '../../types/restaurants'
import { RestaurantCard } from '../ui/cards/restaurantCard'

export const RestaurantList = ({ list }: { list: Restaurant[] }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {list.map((restaurant, index) => (
        <RestaurantCard key={index + Math.random()} {...restaurant} />
      ))}
    </div>
  )
}
