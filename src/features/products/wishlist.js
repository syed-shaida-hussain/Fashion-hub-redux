import { useEffect } from 'react';
import '../../style/utils.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCartButtonClicked,
  deleteWishlistButtonClicked,
  fetchWishlistItems,
  hideToast,
  showToast
} from './productSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, cartItems, wishlistItems } = useSelector((store) => store.products);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWishlistItems());
    }
  }, [dispatch]);

  const deleteFromWishlistHandler = (product) => {
    dispatch(deleteWishlistButtonClicked(product));
    dispatch(
      showToast({ content: 'Item Deleted from wishlist Successfully', toastType: 'success' })
    );
    setTimeout(() => {
      dispatch(hideToast());
    }, 2000);
  };

  const addToCartHandler = (product) => {
    dispatch(addToCartButtonClicked(product));
    dispatch(showToast({ content: 'Item Added to Cart Successfully', toastType: 'success' }));
    setTimeout(() => {
      dispatch(hideToast());
    }, 2000);
  };

  return (
    <div>
      {status === 'loading' ? (
        <div className="centered mt1">Loading...</div>
      ) : (
        <main>
          {wishlistItems.length > 0 ? (
            <section>
              {wishlistItems.map((product) => (
                <div key={product._id} className="flex-r single-product-container p-min ml1 mt1 ">
                  <div>
                    <img
                      className="single-cart-img"
                      src={product?.src?.url}
                      alt={product?.url?.alt}
                    />
                  </div>
                  <div className="ml1 mr1 mb1">
                    <h3 className="mb-min mt-min">{product?.brand}</h3>
                    <div className="bold mb-min">{product?.name}</div>
                    <div className="mb-min">
                      <span className="mr-half og-price">Rs. {product?.originalPrice}</span>
                      <span className="bold">{product?.discountedPrice}</span>
                    </div>
                    <div className="bold u-case mb-min"> Gender : {product?.gender}</div>
                    <div className="bold mb-min">{product?.cod && 'COD Available'}</div>
                    <div className="bold ">
                      {product?.fastDelivery && 'Fast Delivery Available'}
                    </div>
                    <div className=" mb1">15 day replacement policy available.</div>
                    <span className="mr1">
                      <Button
                        variant="contained"
                        onClick={() => deleteFromWishlistHandler(product)}>
                        Remove from Wishlist
                      </Button>
                    </span>
                    {cartItems?.find((item) => item._id === product._id) ? (
                      <Button variant="outlined" onClick={() => navigate('/cart')}>
                        Go to Cart
                      </Button>
                    ) : (
                      <Button variant="outlined" onClick={() => addToCartHandler(product)}>
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <div className="centered mt1">
              <h2 className="mb-min pr-clr bold">Your Wishlist is feeling lonely.</h2>
              <Button variant="outlined" onClick={() => navigate('/products')}>
                Explore Products
              </Button>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export { Wishlist };
