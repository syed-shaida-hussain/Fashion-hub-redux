import './singleProductPage.css';
import '../../../style/utils.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import {
  addToCartButtonClicked,
  addToWishlistButtonClicked
} from '../../../features/products/productSlice';
import { useNavigate } from 'react-router';
// import { toast } from 'react-toastify';

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleProduct, cartItems, wishlistItems, status } = useSelector(
    (store) => store.products
  );
  const { authStatus } = useSelector((store) => store.auth);

  const addToCartHandler = () => {
    authStatus
      ? dispatch(addToCartButtonClicked(singleProduct))
      : // toast.success('Item Added to Cart Successfully')
        navigate('/login');
  };

  const addToWishlistHandler = () => {
    authStatus
      ? dispatch(addToWishlistButtonClicked(singleProduct))
      : // toast.success('Item Added to Wishlist Successfully')
        navigate('/login');
  };

  return (
    <div>
      {status === 'loading' ? (
        <div className="centered">Loading...</div>
      ) : (
        <div className="flex-r single-product-container p-min ml1 mt1 ">
          <img
            className="single-product-img"
            src={singleProduct?.src?.url}
            alt={singleProduct?.url?.alt}
          />
          <div className="ml1 mr1 mb1">
            <h3 className="mb-min mt-min">{singleProduct?.brand}</h3>
            <div className="bold mb-min">{singleProduct?.name}</div>
            <div className="mb-min">
              <span className="mr-half og-price">Rs. {singleProduct?.originalPrice}</span>
              <span className="bold">{singleProduct?.discountedPrice}</span>
            </div>
            <div className="bold u-case mb-min"> Gender : {singleProduct?.gender}</div>
            <div className="bold mb-min">{singleProduct?.cod && 'COD Available'}</div>
            <div className="bold ">{singleProduct?.fastDelivery && 'Fast Delivery Available'}</div>
            <div className=" u-case mb1">15 day replacement policy available.</div>
            <span className="mr1">
              {cartItems?.find((product) => product._id === singleProduct._id) ? (
                <Button variant="contained" onClick={() => navigate('/cart')}>
                  Go to cart
                </Button>
              ) : (
                <Button variant="contained" onClick={() => addToCartHandler()}>
                  Add to cart
                </Button>
              )}{' '}
            </span>
            {wishlistItems?.find((product) => product._id === singleProduct._id) ? (
              <Button variant="outlined" onClick={() => navigate('/wishlist')}>
                Go to Wishlist
              </Button>
            ) : (
              <Button variant="outlined" onClick={() => addToWishlistHandler()}>
                Add to Wishlist
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { SingleProductPage };
