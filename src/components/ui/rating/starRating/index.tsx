import { Star } from '../../../icons/star'

export default function StarRating({ label }: { label: string }) {
  return (
    <div className='flex justify-start gap-3'>
      <span className='text-base text-gray-600'>{label}:</span>
      <div className='flex w-full justify-between md:justify-normal md:space-x-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className='h-6 w-6 fill-white stroke-gray-800' />
        ))}
      </div>
    </div>
  )
}
