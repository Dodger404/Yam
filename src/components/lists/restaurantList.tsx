import { RestaurantCard } from '@/components/cards/restaurantCard'
import { RestaurantCardPC } from '@/components/cards/restaurantCardPc'
import { restaurants } from '@/data/restaurants'

export const RestaurantList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden'>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.name} {...restaurant} />
      ))}
    </div>
  )
}

export const RestaurantListPC = () => {
  return (
    <div className='hidden lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4'>
      {restaurants.map(restaurant => (
        <RestaurantCardPC key={restaurant.name} {...restaurant} />
      ))}
    </div>
  )
}
