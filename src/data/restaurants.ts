export interface Restaurant {
  name: string
  rating: number
  description: string
  kitchenType: string
  time: string
  price: string
  image: string
}

export const restaurants: Restaurant[] = [
  {
    name: 'Трапеза Ярополка',
    rating: 5,
    description: 'Традиционная кухня',
    kitchenType: 'славянская',
    time: '30–40 минут',
    price: '1 500–2 000 ₽',
    image: '/images/yaropolk.jpg',
  },
  {
    name: 'Мёд и перец',
    rating: 4,
    description: 'Современные блюда с акцентом на местные продукты',
    kitchenType: 'микс кулинарных традиций',
    time: '40–50 минут',
    price: '2 000–2 500 ₽',
    image: '/images/honey.jpg',
  },
  {
    name: 'Славянский пир',
    rating: 4,
    description: 'Аутентичные рецепты, блюда для гурманов',
    kitchenType: 'русская',
    time: '25–35 минут',
    price: '1 200–1 500 ₽',
    image: '/images/slavicFeast.png',
  },
  {
    name: 'Берестяной двор',
    rating: 4,
    description: 'Блюда в старинном стиле, традиционные супы и пироги',
    kitchenType: 'традиционная русская',
    time: '20–30 минут',
    price: '1 000–1 400 ₽',
    image: '/images/birchbarkYard.jpg',
  },
  {
    name: 'Коптильня',
    rating: 4,
    description: 'Мясо на дровах и ароматные копчёности',
    kitchenType: 'барбекю',
    time: '30–40 минут',
    price: '1 500–2 000 ₽',
    image: '/images/koptilnya.png',
  },
  {
    name: 'Чайный дом',
    rating: 4,
    description: 'Секреты китайской и японской кухни, традиционные чаи',
    kitchenType: 'азиатская',
    time: '35–45 минут',
    price: '1 200–1 800 ₽',
    image: '/images/teaHouse.png',
  },
  {
    name: 'Булочная у Радмилы',
    rating: 5,
    description: 'Свежая выпечка, пироги и домашние десерты',
    kitchenType: 'кондитерская',
    time: '15–25 минут',
    price: '500–1 000 ₽',
    image: '/images/radmila.jpg',
  },
  {
    name: 'Рыбацкая артель',
    rating: 3,
    description: 'Морепродукты и свежая рыба с авторской подачей',
    kitchenType: 'рыбная',
    time: '40–50 минут',
    price: '2 000–2 400 ₽',
    image: '/images/fishArtel.png',
  },
]
