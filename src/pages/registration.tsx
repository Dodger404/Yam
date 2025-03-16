import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-[url('/images/bgImage.jpg')]">
      <div className="mt-[-10%] flex w-full max-w-[380px] flex-col lg:mt-0 lg:rounded-xl lg:border lg:border-gray-300 lg:bg-white lg:shadow-lg">
        <div className="flex flex-col gap-9 px-5 py-6 lg:px-6 lg:py-10">
          <div className="flex flex-col gap-6">
            <h2 className="font-roboto text-xl font-bold text-gray-800 lg:text-2xl">Регистрация</h2>
            <form className="flex flex-col gap-3.5 lg:gap-4">
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <label className="text-xs text-gray-500" htmlFor="firstName">
                  Имя
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Ярополк"
                  required
                  autoComplete="given-name"
                  className="w-full rounded border border-gray-300 p-1.5 placeholder:text-sm lg:placeholder:text-base"
                />
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <label className="text-xs text-gray-500" htmlFor="lastName">
                  Фамилия
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Иванов"
                  required
                  autoComplete="family-name"
                  className="w-full rounded border border-gray-300 p-1.5 placeholder:text-sm lg:placeholder:text-base"
                />
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <label className="text-xs text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ivanov@yandex.ru"
                  required
                  autoComplete="username"
                  className="w-full rounded border border-gray-300 p-1.5 placeholder:text-sm lg:placeholder:text-base"
                />
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <label className="text-xs text-gray-500" htmlFor="password">
                  Придумайте пароль
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="******"
                  required
                  className="w-full rounded border border-gray-300 p-1.5 placeholder:text-sm lg:placeholder:text-base"
                />
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <label className="text-xs text-gray-500" htmlFor="passwordConfirm">
                  Повторите пароль
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="******"
                  required
                  className="w-full rounded border border-gray-300 p-1.5 placeholder:text-sm lg:placeholder:text-base"
                />
              </div>
            </form>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-2 text-base font-bold text-gray-100"
            >
              Зарегистрироваться
            </button>
          </div>
          <div className="absolute bottom-1.5 flex flex-col gap-1 lg:static lg:gap-2">
            <p className="text-xs text-gray-500 lg:text-sm">Уже зарегистрированы?</p>
            <Link href="/login" className="text-sm font-bold text-blue-600 hover:underline">
              Войти в аккаунт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
