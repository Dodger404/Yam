export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <div className='flex flex-col items-center gap-7 p-5 lg:gap-4 lg:py-8'>
        <div className='hidden lg:flex lg:w-[36.25rem] lg:flex-col lg:items-start lg:gap-2'>
          <h2 className='text-3xl font-bold text-gray-800'>Настройка аккаунта</h2>
        </div>
        <div className='w-full rounded-xl border border-gray-300 bg-white px-4 py-6 shadow-lg lg:max-w-[36.25rem] lg:px-6 lg:py-9'>
          <div className='flex flex-col gap-2'>
            <div className='relative h-[5.75rem] w-[5.75rem] self-center lg:self-start'>
              <button
                type='button'
                aria-label='Изменить аватар профиля'
                className='absolute bottom-0 right-[-1.25rem] flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-md hover:bg-blue-600 active:bg-blue-700'
              ></button>
            </div>
            <form className='flex w-full flex-col lg:gap-1'>
              <div className='md:grid md:grid-cols-2 md:gap-3'>
                <div>
                  <label htmlFor='firstName' className='text-xs text-gray-400'>
                    Имя
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    className='w-full rounded border px-3.5 py-2 text-sm text-gray-800 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:text-base'
                    defaultValue='Ярополк'
                  />
                </div>
                <div>
                  <label htmlFor='lastName' className='text-xs text-gray-400'>
                    Фамилия
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className='w-full rounded border px-3.5 py-2 text-sm text-gray-800 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:text-base'
                    defaultValue='Иванов'
                  />
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div>
                  <label htmlFor='email' className='text-xs text-gray-400'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full rounded border px-3.5 py-2 text-sm text-gray-800 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:text-base'
                    defaultValue='ivanov@yandex.ru'
                  />
                </div>
                <div>
                  <label htmlFor='accountName' className='text-xs text-gray-400'>
                    Имя аккаунта
                  </label>
                  <input
                    type='text'
                    id='accountName'
                    className='w-full rounded border px-3.5 py-2 text-sm text-gray-800 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:text-base'
                    defaultValue='Yaropolk'
                  />
                </div>
              </div>
              <h3 className='mt-10 text-sm font-bold text-gray-800 lg:mt-7 lg:text-base'>Пароль</h3>
              <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div>
                  <label htmlFor='currentPassword' className='text-xs text-gray-400'>
                    Существующий пароль
                  </label>
                  <input
                    type='password'
                    id='currentPassword'
                    placeholder='*******'
                    className='w-full rounded border px-3.5 py-2 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                  />
                </div>
                <div>{/* Empty column for alignment */}</div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-4'>
                <div>
                  <label htmlFor='password' className='text-xs text-gray-400'>
                    Новый пароль
                  </label>
                  <input
                    type='password'
                    id='password'
                    placeholder='*******'
                    className='w-full rounded border px-3.5 py-2 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                  />
                </div>
                <div>
                  <label htmlFor='passwordConfirm' className='text-xs text-gray-400'>
                    Повторите пароль
                  </label>
                  <input
                    type='password'
                    id='passwordConfirm'
                    placeholder='*******'
                    className='w-full rounded border px-3.5 py-2 text-gray-800 placeholder:text-sm placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-500 focus:outline-none lg:placeholder:text-base'
                  />
                </div>
              </div>
            </form>
          </div>
          <button
            type='button'
            className='mt-24 hidden text-sm text-blue-500 hover:underline lg:block'
          >
            Удалить аккаунт
          </button>
        </div>
        <button type='button' className='text-base text-blue-500 hover:underline lg:hidden'>
          Удалить аккаунт
        </button>
      </div>
    </div>
  )
}
