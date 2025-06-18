export const getCart = async (id: string) => {
  // todo: в реальный запрос передать id пользователя
  const res = await fetch('/api/get-cart.json')
  if (!res.ok) throw new Error('Ошибка загрузки ресторанов')
  return await res.json()
}
