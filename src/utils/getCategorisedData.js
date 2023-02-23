export const getCategorisedData = (products, categories) => {
  return categories.length > 0
    ? products.filter(({ category }) => categories.includes(category))
    : products;
};
