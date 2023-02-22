import './landingPage.css';
import '../../../style/utils.css';
import { Button } from '@mui/material';
import BgImage from '../../../assets/ecom-cover.jpg';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../features/products/productSlice';
import { categorize } from '../../../features/filters/filterSlice';

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, status } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (option) => {
    console.log(option);
    dispatch(categorize({ isChecked: true, selectedOption: option }));
    navigate('/products');
  };

  return (
    <div>
      {status === 'loading' ? (
        <div className="centered mt1">Loading...</div>
      ) : (
        <div>
          <div className="flex-c ctr-vert ctr-hor">
            <img className="bg-img" style={{ backgroundImage: `url(${BgImage})` }} />
            <div className="overlay-text">
              <div>Redefined Performance</div>
              <div>Clothing and Accessiories.</div>
              <div className="explore-btn">
                <Button variant="contained" onClick={() => navigate('/products')}>
                  Explore products
                </Button>
              </div>
            </div>
          </div>
          <section className="flex-r sp-ar mb1 mt1">
            {categories?.map(({ categoryName, _id, categoryImg }) => (
              <div key={_id} onClick={() => handleCategoryChange(categoryName)}>
                <img src={categoryImg} className="category-img" />
                <div className="centered u-case bold ft-md mt-min mb-min pr-clr">
                  {categoryName}
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export { LandingPage };
