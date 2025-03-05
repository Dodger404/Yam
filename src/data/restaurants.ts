export type Restaurant = {
    name: string;
    rating: number;
    kitchenType: string;
    time: string;
    price: string;
    image: string;
  };

  export const restaurants: Restaurant[] = [
    {
      name: 'Трапеза Ярополка',
      rating: 5,
      kitchenType: 'Традиционная кухня, славянские блюда',
      time: '30–40 минут',
      price: '1 500–2 000 ₽',
      image: '/images/yaropolk.jpg'
    },
    {
      name: 'Мёд и перец',
      rating: 4,
      kitchenType: 'Современные блюда с акцентом на местные продукты',
      time: '40–50 минут',
      price: '2 000–2 500 ₽',
      image: '/images/honey.jpg'
    },
    {
      name: 'Славянский пир',
      rating: 4,
      kitchenType: 'Аутентичные рецепты, блюда для гурманов',
      time: '25–35 минут',
      price: '1 200–1 500 ₽',
      image: '/images/slavic_feast.png'
    },
    {
      name: 'Берестяной двор',
      rating: 4,
      kitchenType: 'Блюда в старинном стиле, традиционные супы и пироги',
      time: '20–30 минут',
      price: '1 000–1 400 ₽',
      image: '/images/birchbark_yard.jpg' 
    },
    {
      name: 'Коптильня',
      rating: 4,
      kitchenType: 'Мясо на дровах и ароматные копчёности',
      time: '30–40 минут',
      price: '1 500–2 000 ₽',
      image: '/images/koptilnya.png' 
      },
    {
      name: 'Чайный дом',
      rating: 4,
      kitchenType: 'Секреты китайской и японской кухни, традиционные чаи',
      time: '35–45 минут',
      price: '1 200–1 800 ₽',
      image: '/images/tea_house.png'
    },
    {
      name: 'Булочная у Радмилы',
      rating: 5,
      kitchenType: 'Свежая выпечка, пироги и домашние десерты',
      time: '15–25 минут',
      price: '500–1 000 ₽',
      image: '/images/radmila.jpg' 
    },
    {
      name: 'Рыбацкая артель',
      rating: 3,
      kitchenType: 'Морепродукты и свежая рыба с авторской подачей',
      time: '40–50 минут',
      price: '2 000–2 400 ₽',
      image: '/images/fish_artel.png' 
    },
  ];