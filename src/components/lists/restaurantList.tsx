import { RestaurantCard } from '@/components/ui/cards/restaurantCard'
import { restaurants } from '@/data/restaurants'

export const RestaurantList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.name} {...restaurant} />
      ))}
    </div>
  )
}
