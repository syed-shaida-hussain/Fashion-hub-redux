export const getProductsInPriceRange = (products, price) => {
  return products.filter((item) => item.discountedPrice <= price);
};
