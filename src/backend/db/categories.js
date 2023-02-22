import { v4 as uuid } from 'uuid';
import ShoeImg from '../../assets/product-img.webp';
import FormalImg from '../../assets/ecom-img11.jpg';
import PartywearImg from '../../assets/ecom-img12.webp';
import CasualImg from '../../assets/ecom-img8.jpg';

export const categories = [
  {
    _id: uuid(),
    categoryName: 'shoes',
    categoryImg: ShoeImg,
    description: 'Explore a wide range of shoes here.'
  },
  {
    _id: uuid(),
    categoryName: 'partywear',
    categoryImg: PartywearImg,
    description: 'Explore a wide range of party wear here.'
  },
  {
    _id: uuid(),
    categoryName: 'formals',
    categoryImg: FormalImg,
    description: 'Explore a wide range of Formals here.'
  },
  {
    _id: uuid(),
    categoryName: 'casuals',
    categoryImg: CasualImg,
    description: 'Explore a wide range of Casuals here.'
  }
];
