import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from './productSlice';
import '../../style/utils.css';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router';
import { getProductsInPriceRange } from '../../utils/getPriceFilteredData';
import { getCategorisedData } from '../../utils/getCategorisedData';
import { getRatedData } from '../../utils/getRatedData';
import { getSortedData } from '../../utils/getSortedData';
import { getSearchedData } from '../../utils/getSearchedData';

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, products } = useSelector((store) => store.products);
  const { showCodOnly, showFastDeliveryOnly, sortBy, categories, rateBy, searchQuery, price } =
    useSelector((store) => store.filters);

  const searchedProducts = getSearchedData(products, searchQuery);
  const productsInPriceRange = getProductsInPriceRange(searchedProducts, price);
  const categorisedProducts = getCategorisedData(productsInPriceRange, categories);
  const ratedProducts = getRatedData(categorisedProducts, rateBy);
  const sortedProducts = getSortedData(ratedProducts, sortBy);

  const getAllFilteredData = (products, { showCodOnly, showFastDeliveryOnly }) => {
    return products
      .filter(({ cod }) => (showCodOnly ? cod : true))
      .filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true));
  };

  const filteredData = getAllFilteredData(sortedProducts, {
    showCodOnly,
    showFastDeliveryOnly
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getSingleProduct = (product) => {
    dispatch(fetchSingleProduct(product));
    navigate(`/products/${product._id}`);
  };

  return (
    <div>
      {status === 'loading' ? (
        <div className="centered mt1">Loading....</div>
      ) : (
        <div>
          <div className="flex-r wrap">
            {filteredData.map((product) => (
              <div
                key={product._id}
                className="product-container flex-c pb1"
                onClick={() => getSingleProduct(product)}>
                {product.fastDelivery && <span className="chip mt1 ">Fast Delivery</span>}
                <img className="product-img" src={product.src.url} alt={product.src.alt} />
                <div className="ml1">
                  <h3 className="mb-min mt-min">{product.brand}</h3>
                  <div className="bold mb-min">{product.name}</div>
                  <div className="mb-min">
                    <span className="mr-half og-price">Rs. {product.originalPrice}</span>
                    <span className="bold">{product.discountedPrice}</span>
                  </div>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { ProductListing };
