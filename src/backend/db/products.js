import { v4 as uuid } from 'uuid';
import Img1 from '../../assets/product-img.webp';
import Img2 from '../../assets/ecom-img1.jpg';
import Img3 from '../../assets/ecom-img2.jpg';
import Img4 from '../../assets/ecom-img3.webp';
import Img5 from '../../assets/ecom-img4.webp';
import Img6 from '../../assets/ecom-img5.jpg';
import Img7 from '../../assets/ecom-img6.webp';
import Img8 from '../../assets/ecom-img7.jpg';
import Img9 from '../../assets/ecom-img8.jpg';
import Img10 from '../../assets/ecom-img9.webp';
import Img11 from '../../assets/ecom-img10.webp';
import Img12 from '../../assets/ecom-img11.jpg';
import Img13 from '../../assets/ecom-img12.webp';
import Img14 from '../../assets/ecom-img13.avif';
import Img15 from '../../assets/ecom-img14.webp';
import Img16 from '../../assets/ecom-img15.webp';

export const products = [
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men premium trendy Jacket',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img12, alt: "Men's jacket" },
    gender: 'men',
    cod: true,
    fastDelivery: true,
    rating: 1,
    category: 'formals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Sobo',
    name: 'Men premium sports TShirt',
    originalPrice: '1500',
    discountedPrice: '1000',
    src: { url: Img9, alt: "Men's Tshirt" },
    gender: 'men',
    cod: false,
    fastDelivery: true,
    rating: 5,
    category: 'casuals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men winter cool shoes',
    originalPrice: '3000',
    discountedPrice: '2500',
    src: { url: Img2, alt: 'sports shoes' },
    gender: 'men',
    cod: true,
    fastDelivery: false,
    rating: 3,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Women premium Tshirt',
    originalPrice: '3000',
    discountedPrice: '2800',
    src: { url: Img11, alt: 'Silk saree' },
    gender: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    category: 'casuals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Roadster',
    name: 'Men stylish Formal shoes',
    originalPrice: '1000',
    discountedPrice: '700',
    src: { url: Img3, alt: 'Casual shoes' },
    gender: 'men',
    cod: true,
    fastDelivery: false,
    rating: 5,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Puma',
    name: 'Women premium stylish shoes',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img5, alt: 'Formal shoes' },
    gender: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Superdry',
    name: 'Men formal quality Jacket',
    originalPrice: '4000',
    discountedPrice: '3500',
    src: { url: Img13, alt: 'Formal jacket' },
    gender: 'men',
    cod: false,
    fastDelivery: true,
    rating: 2,
    category: 'partywear',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Adidas',
    name: 'Men sports durable shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img4, alt: 'Climbing shoes' },
    gender: 'men',
    cod: false,
    fastDelivery: true,
    rating: 3,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Fashion',
    name: 'Women premium party shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img6, alt: 'Women party shoes' },
    gender: 'women',
    cod: true,
    fastDelivery: true,
    rating: 4,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Bewakoof',
    name: 'Men formal premium pants',
    originalPrice: '3000',
    discountedPrice: '2500',
    src: { url: Img16, alt: 'Formal pants' },
    gender: 'men',
    cod: false,
    fastDelivery: false,
    rating: 5,
    category: 'formals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: ' women casual party Jacket',
    originalPrice: '3000',
    discountedPrice: '2000',
    src: { url: Img14, alt: 'Women jacket' },
    gender: 'women',
    cod: false,
    rating: 2,
    category: 'partywear',
    fastDelivery: true,
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Sobo',
    name: 'Men round neck Tshirt',
    originalPrice: '700',
    discountedPrice: '500',
    src: { url: Img10, alt: 'Round Tshirt' },
    gender: 'women',
    cod: false,
    fastDelivery: false,
    rating: 1,
    category: 'casuals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Roadster',
    name: 'Men stylish casual shoes',
    originalPrice: '1000',
    discountedPrice: '700',
    src: { url: Img1, alt: 'Casual shoes' },
    gender: 'men',
    cod: true,
    fastDelivery: false,
    rating: 5,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Women premium stylish shoes',
    originalPrice: '2000',
    discountedPrice: '1500',
    src: { url: Img8, alt: 'Formal shoes' },
    gender: 'women',
    cod: true,
    fastDelivery: false,
    rating: 4,
    category: 'shoes',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Superdry',
    name: 'Men formal quality Jacket',
    originalPrice: '4000',
    discountedPrice: '3500',
    src: { url: Img15, alt: 'Formal jacket' },
    gender: 'men',
    cod: false,
    fastDelivery: true,
    rating: 2,
    category: 'formals',
    quantity: 1
  },
  {
    _id: uuid(),
    brand: 'Nike',
    name: 'Men sports durable shoes',
    originalPrice: '1000',
    discountedPrice: '500',
    src: { url: Img7, alt: 'Climbing shoes' },
    gender: 'men',
    cod: false,
    fastDelivery: true,
    rating: 3,
    category: 'shoes',
    quantity: 1
  }
];
