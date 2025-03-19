import Link from 'next/link'

export default function RegistrationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className='mt-[-10%] flex w-full max-w-[380px] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg'>
        <div className='flex flex-col gap-9 px-5 py-6 lg:px-6 lg:py-10'>
          <div className='flex flex-col gap-6'>
            <h2
              id='registration'
              className='font-roboto text-xl font-bold text-gray-800 lg:text-2xl'
            >
              Регистрация
            </h2>
            <form aria-labelledby='registration' className='flex flex-col gap-3.5 lg:gap-4'>
              <div className='flex flex-col gap-0.5 lg:gap-1'>
                <label className='text-xs text-gray-500' htmlFor='firstName'>
                  Имя
                </label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='Ярополк'
                  minLength={2}
                  maxLength={50}
                  required
                  autoComplete='given-name'
                  pattern='^[a-zA-Zа-яА-ЯёЁ\-]+$'
                  data-error-message='Имя должно содержать только буквы и знак дефиса'
                  className='w-full rounded border border-gray-300 p-1.5 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                />
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-1'>
                <label className='text-xs text-gray-500' htmlFor='lastName'>
                  Фамилия
                </label>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Иванов'
                  minLength={2}
                  maxLength={50}
                  required
                  autoComplete='family-name'
                  pattern='^[a-zA-Zа-яА-ЯёЁ\-]+$'
                  data-error-message='Фамилия должна содержать только буквы и знак дефиса'
                  className='w-full rounded border border-gray-300 p-1.5 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                />
              </div>
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
              <div className='flex flex-col gap-0.5 lg:gap-1'>
                <label className='text-xs text-gray-500' htmlFor='password'>
                  Придумайте пароль
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='******'
                  minLength={6}
                  maxLength={100}
                  required
                  pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
                  data-error-message='Пароль должен содержать минимум 6 символов, хотя бы одну букву и одну цифру'
                  className='w-full rounded border border-gray-300 p-1.5 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                />
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-1'>
                <label className='text-xs text-gray-500' htmlFor='passwordConfirm'>
                  Повторите пароль
                </label>
                <input
                  type='password'
                  id='passwordConfirm'
                  placeholder='******'
                  minLength={6}
                  maxLength={100}
                  required
                  pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$'
                  data-error-message='Пароль должен содержать минимум 6 символов, хотя бы одну букву и одну цифру'
                  className='w-full rounded border border-gray-300 p-1.5 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                />
              </div>
            </form>
            <button
              type='submit'
              className='w-full rounded-lg bg-blue-500 py-2 text-base font-bold text-gray-100 hover:bg-blue-600 hover:text-gray-100 active:bg-blue-700 active:text-white'
            >
              Зарегистрироваться
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
