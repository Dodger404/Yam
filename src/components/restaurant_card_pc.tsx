import { Restaurant } from '@/data/restaurants';
import { Star } from '@/components/star';
import { DiscountIcon } from '@/components/discount_icon';

const RestaurantCardPC: React.FC<Restaurant> = ({ name, rating, description, kitchenType, time, price, image }) => {
  return (
    <div className="bg-white rounded-md shadow-md px-4 pt-2 pb-4 flex flex-col gap-1.5 items-start text-left min-w-[14rem] max-w-[20rem] flex-grow">
      <h3 className="text-xl font-bold font-roboto text-gray-800 text-center w-full">{name}</h3>
      <img src={image} alt={name} className="w-full h-28 object-cover rounded-lg" />
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={index < rating ? 'fill-yellow-500 stroke-yellow-500' : 'fill-white stroke-gray-800'} />
        ))}
      </div>
      <p className="text-gray-800 text-sm">{description}</p>
      <div className="flex justify-between w-full text-gray-600 text-sm">
        <span>Тип кухни:</span>
        <span>{kitchenType}</span>
      </div>
      <div className="flex justify-between w-full text-gray-600 text-sm">
        <span>Время доставки:</span>
        <span>{time}</span>
      </div>
      <div className="flex justify-between w-full text-gray-600 text-xs">
        <span className="flex items-center">
          <DiscountIcon className="w-4 h-4 mr-1" />
          Средний чек:
        </span>
        <span>{price}</span>
      </div>
      <button className="bg-blue-500 text-gray-100 text-base font-bold w-full py-2 rounded-md mt-4">
        Смотреть меню
      </button>
    </div>
  );
};

export default RestaurantCardPC;

