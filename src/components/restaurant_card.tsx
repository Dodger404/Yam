import { Restaurant } from '@/data/restaurants';
import { Star } from '@/components/star';
import { DiscountIcon } from '@/components/discount_icon';

const RestaurantCard: React.FC<Restaurant> = ({ name, rating, description, time, price, image }) => {
  return (
    <div className="bg-white rounded-md shadow-md px-4 pt-2 pb-4 flex flex-col gap-1">
      <h3 className="text-base font-bold text-center font-roboto text-gray-800">{name}</h3>
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-xl" />
      <div className="flex items-center justify-between gap-2">
        <div className="flex space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className={index < rating ? 'fill-yellow-500 stroke-yellow-500' : 'fill-white stroke-gray-800'} />
          ))}
        </div>
        <p className="text-gray-600 text-xs">Тип кухни</p>
      </div>
      <p className="text-gray-800 text-xs text-left">{description}</p>
      <div className="flex justify-between text-xs text-gray-600 gap-4 mt-1">
        <span className="flex items-center">{time}</span>
        <span className="flex items-center">
          <DiscountIcon className="w-4 h-4 mr-1" />
          {price}
        </span>
      </div>
      <button className="bg-blue-500 text-gray-100 text-sm font-bold w-full py-2 rounded-md mt-2">
        Смотреть меню
      </button>
    </div>
  );
};

export default RestaurantCard;


