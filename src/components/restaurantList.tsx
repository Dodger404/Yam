import RestaurantCard from '@/components/restaurantCard';
import RestaurantCardPC from '@/components/restaurantCardPc';
import { restaurants } from '@/data/restaurants';

const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.name} {...restaurant} />
      ))}
    </div>
  );
};

const RestaurantListPC = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
      {restaurants.map(restaurant => (
        <RestaurantCardPC key={restaurant.name} {...restaurant} />
      ))}
    </div>
  );
};

export { RestaurantList, RestaurantListPC };
