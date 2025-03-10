import { restaurants } from '@/data/restaurants';
import RestaurantCard from '@/components/restaurant_card';
import RestaurantCardPC from '@/components/restaurant_card_pc';

const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.name} {...restaurant} />
      ))}
    </div>
  );
};

const RestaurantListPC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCardPC key={restaurant.name} {...restaurant} />
      ))}
    </div>
  );
};

export { RestaurantList, RestaurantListPC };
