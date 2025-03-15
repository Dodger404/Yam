export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/bgImage.jpg')] bg-cover bg-fixed bg-center">
      <div className="w-full max-w-[380px] rounded-xl border border-gray-300 bg-white shadow-lg">
        <div className="flex flex-col gap-9 p-10 px-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-roboto text-2xl font-bold">Вход в аккаунт</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                <label className="text-xs text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ivanov@yandex.ru"
                  className="w-full rounded border p-2 placeholder:text-base"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-xs text-gray-500" htmlFor="password">
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="******"
                  className="w-full rounded border p-2 placeholder:text-base"
                />
                <a href="#" className="self-end text-base text-gray-500">
                  Забыли пароль?
                </a>
              </div>
            </form>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-2 text-base font-bold text-white"
            >
              Войти
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">У вас ещё нет аккаунта?</p>
            <a href="#" className="text-sm font-bold text-blue-500 hover:underline">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
