import { restaurants } from '@/data/restaurants';
import RestaurantCard from '@/components/restaurant_card';

const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.name} {...restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;