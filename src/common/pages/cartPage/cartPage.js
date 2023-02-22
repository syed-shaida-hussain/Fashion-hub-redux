import { Cart } from '../../../features/products/cart';
import '../../../style/utils.css';
import './cartPage.css';
import { PriceModal } from '../../components/priceModal';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const { cartItems } = useSelector((store) => store.products);
  return (
    <div className="flex-r sp-ar ml1 mr1">
      <Cart />
      {cartItems.length > 0 && <PriceModal />}
    </div>
  );
};

export { CartPage };
