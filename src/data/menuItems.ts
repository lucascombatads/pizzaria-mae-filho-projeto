import { MenuItem } from '../types';

export const pizzasSalgadas: MenuItem[] = [
  {
    id: '1', 
    name: 'Pizza de 45cm | grátis Brotinho de banana e Flexa 2l',
    prices: { large: 0, medium: 0, small: 0 },
    ingredients: ['Escolher sabor na observação do carrinho'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/Imagem%20do%20WhatsApp%20de%202025-08-17%20%C3%A0(s)%2010.43.51_ea44cb40.jpg?raw=true',
    category: 'salgada'
  },
  {
    id: '2', 
    name: 'Frango c/ catupiry',
    prices: { large: 80, medium: 60, small: 31 },
    ingredients: ['molho', 'queijo', 'presunto', 'calabresa', 'tomate', 'cebola', 'pimentão', 'milho', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/frango-catupiry.png?raw=true',
    category: 'salgada'
  },
  {
    id: '3',
    name: 'Calabresa', 
    prices: { large: 62, medium: 40, small: 31 },
    ingredients: ['molho', 'queijo', 'calabresa', 'cebola', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/calabresa.png?raw=true',
    category: 'salgada'
  },
  {
    id: '4',
    name: 'Mussarela',
    prices: { large: 57, medium: 36, small: 29 },
    ingredients: ['molho', 'queijo', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/mu%C3%A7arela.png?raw=true',
    category: 'salgada'
  },
  {
    id: '5',
    name: 'Presunto',
    prices: { large: 62, medium: 40, small: 32 },
    ingredients: ['molho', 'queijo', 'presunto', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/napolitana.png?raw=true',
    category: 'salgada'
  },
  {
    id: '6',
    name: 'Mista',
    prices: { large: 62, medium: 40, small: 39 },
    ingredients: ['molho', 'queijo', 'presunto', 'calabresa', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/portuguesa.png?raw=true',
    category: 'salgada'
  },
  {
    id: '7',
    name: '4 Queijos',
    prices: { large: 77, medium: 58, small: 37 },
    ingredients: ['molho', 'mussarela', 'provolone', 'catupiry', 'gorgonzola', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/mu%C3%A7arela.png?raw=true',
    category: 'salgada'
  },
  {
    id: '8',
    name: 'Bacon',
    prices: { large: 60, medium: 40, small: 29 },
    ingredients: ['molho', 'queijo', 'bacon', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/milho-com-bacon.png?raw=true',
    category: 'salgada'
  },
  {
    id: '9',
    name: 'Bacon com Ovos',
    prices: { large: 87, medium: 63, small: 42 },
    ingredients: ['molho', 'queijo', 'bacon', 'ovos', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/camarao-c-catupiry.png?raw=true',
    category: 'salgada'
  },
  {
    id: '10',
    name: 'Portuguesa',
    prices: { large: 75, medium: 57, small: 39 },
    ingredients: ['molho', 'queijo', 'bacon', 'ovos', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/pepperoni.png?raw=truee',
    category: 'salgada'
  },
  {
    id: '11',
    name: 'Mãe e Filho',
    prices: { large: 79, medium: 61, small: 40 },
    ingredients: ['molho', 'queijo', 'calabresa', 'bacon', 'ovo', 'catupiry', 'azeitona', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/moda-da-casa.png?raw=true',
    category: 'salgada'
  },
  {
    id: '12',
    name: 'Magnífica',
    prices: { large: 80, medium: 58, small: 39 },
    ingredients: ['molho', 'queijo', 'presunto', 'calabresa', 'catupiry', 'orégano'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/portuguesa.png?raw=true',
    category: 'salgada'
  }
];

export const pizzasDoces: MenuItem[] = [
  {
    id: 'd1',
    name: 'Banana',
    prices: { large: 68, medium: 52, small: 36 },
    ingredients: ['banana', 'canela', 'açúcar'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/f83ebcf9-8185-4a4b-b255-bfbebee5f504.png?raw=true',
    category: 'doce'
  },
  {
    id: 'd2',
    name: 'Choco Banana',
    prices: { large: 72, medium: 53, small: 36 },
    ingredients: ['banana', 'chocolate', 'açúcar', 'canela'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/381f7252-3c71-41d7-94fb-f05dd94b19a0.png?raw=true',
    category: 'doce'
  },
  {
    id: 'd3',
    name: 'Romeu e Julieta',
    prices: { large: 72, medium: 53, small: 37 },
    ingredients: ['goiabada', 'queijo'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/1211e12d-0c08-40c8-9df9-4916160fe504.png?raw=true',
    category: 'doce'
  },
  {
    id: 'd4',
    name: 'Chocolate',
    prices: { large: 71, medium: 52, small: 36 },
    ingredients: ['chocolate ao leite'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/bb03fe53-a619-41f0-a820-0477ab3971b4.png?raw=true',
    category: 'doce'
  },
  {
    id: 'd5',
    name: 'Nutella',
    prices: { large: 72, medium: 56, small: 38 },
    ingredients: ['creme de avelã Nutella'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/26ba346c-db86-445a-8f2a-28717eb30179.png?raw=true',
    category: 'doce'
  },
  {
    id: 'd6',
    name: 'Chocolate Branco',
    prices: { large: 73, medium: 56, small: 38 },
    ingredients: ['Chocolate branco'],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/85b8f5c1-2b2f-42d0-bd7f-01e150fc6826.png?raw=true',
    category: 'doce'
  }
];

export const bebidas: MenuItem[] = [
  {
    id: 'b1',
    name: 'Coca-Cola 2L',
    prices: { large: 15, medium: 15, small: 15 },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/download.jpg?raw=true',
    category: 'bebida'
  },
  {
    id: 'b2',
    name: 'Coca-cola (Lata)',
    prices: {large: 5, medium: 5, small: 5  },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/images.jpg?raw=true',
    category: 'bebida'
  },
  {
    id: 'b2',
    name: 'Fanta (Lata)',
    prices: {large: 5, medium: 5, small: 5  },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/fantalaranja.jpeg?raw=true',
    category: 'bebida'
  },
  {
    id: 'b2',
    name: 'Guaraná Antartica (Lata)',
    prices: {large: 5, medium: 5, small: 5  },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/3guarana.jpeg?raw=true',
    category: 'bebida'
  },
  {
    id: 'b2',
    name: 'Del Valle',
    prices: {large: 7, medium: 7, small: 7  },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/delvalle.jpeg?raw=true',
    category: 'bebida'
  },
  {
    id: 'b2',
    name: 'Guaramor',
    prices: {large: 2, medium: 2, small: 2  },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/9ed5177b-193e-45fc-8a16-a8bd1ecf64c6.png?raw=true',
    category: 'bebida'
  },
  {
    id: 'b3',
    name: 'Flexa 2L',
    prices: { large: 7, medium: 7, small: 7 },
    ingredients: [],
    image: 'https://github.com/lucascombatads/imagens-hepatoburn/blob/main/flexa.jpeg?raw=true',
    category: 'bebida'
  }
];

export const allMenuItems = [...pizzasSalgadas, ...pizzasDoces, ...bebidas];