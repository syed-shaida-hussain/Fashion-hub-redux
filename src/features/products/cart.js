import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlistButtonClicked,
  decrementCartQuantity,
  deleteCartButtonClicked,
  fetchCartItems,
  incrementCartQuantity
} from './productSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, cartItems, wishlistItems } = useSelector((store) => store.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCartItems());
    }
  }, [dispatch, status]);

  const removeFromCartHandler = (product) => {
    dispatch(deleteCartButtonClicked(product));
    // toast.success('Item removed from cart successfully');
  };

  const addToWishlistHandler = (product) => {
    dispatch(addToWishlistButtonClicked(product));
    // toast.success('Item Added to wishlist');
  };

  const decrementCartQuantityHandler = (product) => {
    dispatch(decrementCartQuantity(product));
    // toast.success('Item quantity updated successfully');
  };

  const incrementCartQuantityHandler = (product) => {
    dispatch(incrementCartQuantity(product));
    // toast.success('Item quantity updated successfully');
  };
  return (
    <div>
      {status === 'loading' ? (
        <div className="centered mt1">Loading...</div>
      ) : (
        <main>
          {cartItems?.length > 0 ? (
            <section>
              {cartItems?.map((product) => (
                <div key={product._id} className="flex-r single-product-container p-min ml1 mt1 ">
                  <div>
                    <img
                      className="single-cart-img"
                      src={product?.src?.url}
                      alt={product?.url?.alt}
                    />
                    <div className="mt1 ft-md  mb1">
                      <Button
                        variant="outlined"
                        onClick={() =>
                          product.quantity <= 1
                            ? removeFromCartHandler(product)
                            : decrementCartQuantityHandler(product)
                        }>
                        -
                      </Button>
                      <span className="ml1 mr1 pr-clr">{product.quantity}</span>
                      <Button
                        variant="contained"
                        onClick={() => incrementCartQuantityHandler(product)}>
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="ml1 mr1 mb1">
                    <h3 className="mb-min mt-min">{product?.brand}</h3>
                    <div className="bold mb-min">{product?.name}</div>
                    <div className="mb-min">
                      <span className="mr-half og-price">Rs. {product?.originalPrice}</span>
                      <span className="bold">{product?.discountedPrice}</span>
                    </div>
                    <div className="bold u-case mb-min"> Gender : {product?.gender}</div>
                    <div className=" mb1">15 days replacement policy available.</div>
                    <span className="mr1">
                      <Button variant="contained" onClick={() => removeFromCartHandler(product)}>
                        Remove from cart
                      </Button>
                    </span>
                    {wishlistItems?.find((item) => item._id === product._id) ? (
                      <Button variant="outlined" onClick={() => navigate('/wishlist')}>
                        Go to Wishlist
                      </Button>
                    ) : (
                      <Button variant="outlined" onClick={() => addToWishlistHandler(product)}>
                        Add to Wishlist
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <div className="centered mt1">
              <h2 className="mb-min pr-clr bold">Your cart is feeling lonely.</h2>
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

export { Cart };
