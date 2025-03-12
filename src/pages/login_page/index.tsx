import '@/styles/globals.css'

export default function LoginPage() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/images/bgImage.jpg')] bg-fixed bg-cover bg-center">
        <div className="bg-white rounded-xl shadow-lg border border-gray-300 max-w-[380px] w-full">
          <div className="flex flex-col gap-9 p-10 px-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold font-roboto">Вход в аккаунт</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <label className="text-xs text-gray-500" htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="ivanov@yandex.ru" className="w-full p-2 border rounded placeholder:text-base"/>
                </div>
                <div className="flex flex-col gap-0.5">
                  <label className="text-xs text-gray-500" htmlFor="password">Пароль</label>
                  <input type="password" id="password" placeholder="******" className="w-full p-2 border rounded placeholder:text-base"/>
                  <a href="#" className="text-base text-gray-500 self-end">Забыли пароль?</a>
                </div>
              </form>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg text-base font-bold">Войти</button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">У вас ещё нет аккаунта?</p>
              <a href="#" className="text-blue-500 text-sm font-bold hover:underline">Зарегистрироваться</a>
            </div>
          </div>
        </div>
      </div>
  )
}



