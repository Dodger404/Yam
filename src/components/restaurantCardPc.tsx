import { DiscountIcon } from '@/components/icons/discountIcon';
import { Star } from '@/components/icons/star';
import { Restaurant } from '@/data/restaurants';

export const RestaurantCardPC: React.FC<Restaurant> = ({
  name,
  rating,
  description,
  kitchenType,
  time,
  price,
  image,
}) => {
  return (
    <div className="flex min-w-[14rem] max-w-[20rem] flex-grow flex-col items-start gap-1.5 rounded-md bg-white px-4 pb-4 pt-2 text-left shadow-md">
      <h3 className="font-roboto w-full text-center text-xl font-bold text-gray-800">{name}</h3>
      <img src={image} alt={name} className="h-28 w-full rounded-lg object-cover" />
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < rating ? 'fill-yellow-500 stroke-yellow-500' : 'fill-white stroke-gray-800'
            }
          />
        ))}
      </div>
      <p className="w-full text-sm text-gray-800">{description}</p>
      <div className="flex w-full justify-between text-sm text-gray-600">
        <span>Тип кухни:</span>
        <span>{kitchenType}</span>
      </div>
      <div className="flex w-full justify-between text-sm text-gray-600">
        <span>Время доставки:</span>
        <span>{time}</span>
      </div>
      <div className="flex w-full justify-between text-xs text-gray-600">
        <span className="flex items-center">
          <DiscountIcon className="mr-1 h-4 w-4" />
          Средний чек:
        </span>
        <span>{price}</span>
      </div>
      <button className="mt-4 w-full rounded-md bg-blue-500 py-2 text-base font-bold text-gray-100">
        Смотреть меню
      </button>
    </div>
  );
};
