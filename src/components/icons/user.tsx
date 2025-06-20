import { cn } from '../../utils/cn'

type Props = {
  className?: string
}

export const User = ({ className }: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cn(className)}
  >
    <path
      d='M16.249 5.75C16.249 6.74456 15.8539 7.69839 15.1507 8.40165C14.4474 9.10491 13.4936 9.5 12.499 9.5C11.5044 9.5 10.5506 9.10491 9.84735 8.40165C9.14409 7.69839 8.749 6.74456 8.749 5.75C8.749 4.75544 9.14409 3.80161 9.84735 3.09835C10.5506 2.39509 11.5044 2 12.499 2C13.4936 2 14.4474 2.39509 15.1507 3.09835C15.8539 3.80161 16.249 4.75544 16.249 5.75ZM5 19.868C5.03213 17.9004 5.83634 16.0242 7.23918 14.644C8.64202 13.2639 10.5311 12.4905 12.499 12.4905C14.4669 12.4905 16.356 13.2639 17.7588 14.644C19.1617 16.0242 19.9659 17.9004 19.998 19.868C17.6454 20.9468 15.0871 21.5035 12.499 21.5C9.823 21.5 7.283 20.916 5 19.868Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
