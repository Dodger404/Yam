'use client'

import { useRouter } from 'next/router'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'

import { getCart } from '../api/get-cart'
import OrderSummary from '../components/cartPage/orderSummary'
import { CartList } from '../components/lists/cartList'
import Header from '../components/ui/headers/header'
import HeaderMobile from '../components/ui/headers/headerMobile'

export default function CartPage() {
  const router = useRouter()
  const id = '1' // необходимо получать id пользователя, для получения корзины

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getCart'],
    queryFn: () => getCart(id as string),
  })

  const getFullPrice = () => {
    if (data) {
      let sum = 0
      data.map(item => {
        sum += Number(item.price)
      })
      return sum
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <div className='flex items-center gap-2'>
          <ArrowLongLeftIcon
            onClick={() => router.back()}
            aria-hidden='true'
            className='h-6 w-6 text-gray-800 lg:hidden'
          />
          <h1 className='font-roboto text-2xl font-bold text-gray-800 lg:text-3xl'>Ваша корзина</h1>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row'>
          {isError ? (
            'Упс... Похоже произошла ошибка, обратитесь пожалуйста в тех поддержку'
          ) : (
            <>
              <div className='w-full lg:w-3/4'>
                {isLoading && !data ? 'Ваша корзина пуста' : <CartList items={data} />}
              </div>
              <OrderSummary totalPrice={`${getFullPrice()} ₽`} totalItems='4' />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
