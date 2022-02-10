export const products = [
  {
    id: 1,
    name: 'Washi Tape',
    description: '6pcs Random Color Washi Tape', 
    stock: 5,
    price: 1,
    img: 'https://img.ltwebstatic.com/images3_pi/2021/11/02/1635816806cc5d036a8d64d489f20d4aae0dfc427a_thumbnail_900x.webp',
    category: 'washi-tapes',
  },
  {
    id: 2,
    name: 'Pattern Papers',
    description: '15sheets Random Scenery Pattern Scrapbooking Paper', 
    stock: 9,
    price: 2.50,
    img: 'https://img.ltwebstatic.com/images3_pi/2019/11/20/157424279372e7359700d729509322688222fa1d65_thumbnail_900x.webp',
    category: 'papers',
  },  
  {
    id: 3,
    name: 'Ballpoint Pen',
    description: '1pc 10 In 1 Random Cartoon Ballpoint Pen', 
    stock: 3,
    price: 0.75,
    img: 'https://img.ltwebstatic.com/images3_pi/2021/09/22/16322787646a6ed45799311439daf1273ffd0cd927_thumbnail_900x.webp',
    category: 'pens',
  },
  {
    id: 4,
    name: 'Pencil Bag',
    description: 'Plaid Pattern Pencil Bag', 
    stock: 6,
    price: 5.75,
    img: 'https://img.ltwebstatic.com/images3_pi/2020/07/07/159411110753ffa5e0040f0c6aa9f03a8c74fcd10b_thumbnail_900x.webp',
    category: 'pens',
  },
  {
    id: 5,
    name: 'Washi Tape Multicolor',
    description: '5pcs Random Pattern Washi Tape',
    stock: 4,
    price: 1,
    img: 'https://img.ltwebstatic.com/images3_pi/2022/01/14/16421229902892c0c8994b35eaf8c10e9632776437_thumbnail_900x.webp',
    category: 'washi-tapes'
  },
  {
    id: 6,
    name: 'Plain colored papers',
    description: '366pcs Plain Material Paper',
    stock: 7,
    price:4.50,
    img: 'https://img.ltwebstatic.com/images3_pi/2021/05/13/162088636495ac0cce96c8ad20350222329a058665_thumbnail_900x.webp',
    category: 'papers'
  }
];

export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000)
})