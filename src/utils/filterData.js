export const getFilteredData = (filteredList, rateBy, categories) => {
  if (rateBy && rateBy === '4_STARS_AND_ABOVE') {
    if (categories.length > 0) {
      return filteredList
        .filter(({ category }) => categories.includes(category))
        .filter(({ rating }) => rating >= 4);
    } else {
      return filteredList.filter(({ rating }) => rating >= 4);
    }
  }
  if (rateBy && rateBy === '3_STARS_AND_ABOVE') {
    if (categories.length > 0) {
      return filteredList
        .filter(({ category }) => categories.includes(category))
        .filter(({ rating }) => rating >= 3);
    } else {
      return filteredList.filter(({ rating }) => rating >= 3);
    }
  }
  if (rateBy && rateBy === '2_STARS_AND_ABOVE') {
    if (categories.length > 0) {
      return filteredList
        .filter(({ category }) => categories.includes(category))
        .filter(({ rating }) => rating >= 2);
    } else {
      return filteredList.filter(({ rating }) => rating >= 2);
    }
  }
  if (rateBy && rateBy === '1_STARS_AND_ABOVE') {
    if (categories.length > 0) {
      return filteredList
        .filter(({ category }) => categories.includes(category))
        .filter(({ rating }) => rating >= 1);
    } else {
      return filteredList.filter(({ rating }) => rating >= 1);
    }
  }
  if (categories.length > 0) {
    return filteredList.filter(({ category }) => categories.includes(category));
  }
  return filteredList;
};
