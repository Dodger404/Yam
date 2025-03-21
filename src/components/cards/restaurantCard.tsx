import { DiscountIcon } from '@/components/icons/discountIcon'
import { Star } from '@/components/icons/star'
import { Restaurant } from '@/data/restaurants'

export const RestaurantCard: React.FC<Restaurant> = ({
  name,
  rating,
  description,
  time,
  price,
  image,
}) => {
  return (
    <div className='flex flex-col gap-1 rounded-md bg-white px-4 pb-4 pt-2 shadow-md'>
      <h3 className='font-roboto text-center text-base font-bold text-gray-800'>{name}</h3>
      <img src={image} alt={name} className='h-32 w-full rounded-xl object-cover' />
      <div className='flex items-center justify-between gap-2'>
        <div className='flex space-x-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={
                index < rating ? 'fill-yellow-500 stroke-yellow-500' : 'fill-white stroke-gray-800'
              }
            />
          ))}
        </div>
        <p className='text-xs text-gray-600'>Тип кухни</p>
      </div>
      <p className='text-left text-xs text-gray-800'>{description}</p>
      <div className='mt-1 flex justify-between gap-4 text-xs text-gray-600'>
        <span className='flex items-center'>{time}</span>
        <span className='flex items-center'>
          <DiscountIcon aria-hidden='true' className='mr-1 h-4 w-4' />
          {price}
        </span>
      </div>
      <button
        type='button'
        className='mt-2 w-full rounded-md bg-blue-500 py-2 text-sm font-bold text-gray-100 hover:bg-blue-600 active:bg-blue-700'
      >
        Смотреть меню
      </button>
    </div>
  )
}
