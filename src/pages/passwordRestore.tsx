import Link from 'next/link'

export default function passwordRestore() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className='mt-[-10%] flex w-full max-w-[380px] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg'>
        <div className='flex flex-col gap-9 px-5 py-6 lg:px-6 lg:py-10'>
          <div className='flex flex-col gap-7'>
            <h2
              id='reset-password'
              className='font-roboto text-xl font-bold text-gray-800 lg:text-2xl'
            >
              Восстановление пароля
            </h2>
            <p className='text-sm text-gray-800 lg:text-base'>
              Укажите почту, на которую, регистрировали аккаунт, и мы отправим инструкцию по
              восстановлению пароля.
            </p>
            <form aria-labelledby='reset-password' className='flex flex-col'>
              <div className='flex flex-col gap-0.5 lg:gap-1'>
                <label className='text-xs text-gray-500' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='ivanov@yandex.ru'
                  minLength={5}
                  maxLength={100}
                  required
                  autoComplete='username'
                  pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                  data-error-message='Введите корректный email (например, ivanov@yandex.ru)'
                  className='w-full rounded border border-gray-300 p-1.5 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                />
              </div>
            </form>
            <button
              type='submit'
              className='w-full rounded-lg bg-blue-500 py-2 text-base font-bold text-gray-100 hover:bg-blue-600 hover:text-gray-100 active:bg-blue-700 active:text-white'
            >
              Восстановить
            </button>
          </div>
          <div className='flex flex-col gap-1 lg:gap-2'>
            <span className='text-xs text-gray-500 lg:text-sm'>Уже зарегистрированы?</span>
            <Link href='/login' className='text-sm font-bold text-blue-600 hover:underline'>
              Войти в аккаунт
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
