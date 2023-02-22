import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup
  // Slider
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {
  toggleFilters,
  showCod,
  showFastDelivery,
  clearAllFilters,
  sortProducts,
  categorizeProducts,
  filterByRating
} from './filterSlice';

const Filters = () => {
  const dispatch = useDispatch();
  const { showCodOnly, showFastDeliveryOnly, sortBy, categories, rateBy } = useSelector(
    (store) => store.filters
  );

  const handleCategoryChange = (e, option) => {
    let checked = e.target.checked;
    dispatch(categorizeProducts({ isChecked: checked, selectedOption: option }));
  };

  return (
    <aside className="filters mt1 ml1 mr1">
      <div className="flex-r sp-bw mb1">
        <span>Filters</span>
        <Button variant="text" onClick={() => dispatch(clearAllFilters())}>
          Clear All Filters
        </Button>
        <CloseIcon className="icon" onClick={() => dispatch(toggleFilters())} />
      </div>
      {/* <Slider size="small" defaultValue={500} aria-label="Small" valueLabelDisplay="auto" /> */}
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Rating</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
          <FormControlLabel
            value="4_STARS_AND_ABOVE"
            control={
              <Radio
                checked={rateBy && rateBy === '4_STARS_AND_ABOVE'}
                onChange={() => dispatch(filterByRating('4_STARS_AND_ABOVE'))}
              />
            }
            label="4 stars and above"
          />
          <FormControlLabel
            value="3_STARS_AND_ABOVE"
            control={
              <Radio
                checked={rateBy && rateBy === '3_STARS_AND_ABOVE'}
                onChange={() => dispatch(filterByRating('3_STARS_AND_ABOVE'))}
              />
            }
            label="3 stars and above"
          />
          <FormControlLabel
            value="2_STARS_AND_ABOVE"
            control={
              <Radio
                checked={rateBy && rateBy === '2_STARS_AND_ABOVE'}
                onChange={() => dispatch(filterByRating('2_STARS_AND_ABOVE'))}
              />
            }
            label="2 stars and above"
          />
          <FormControlLabel
            value="1_STARS_AND_ABOVE"
            control={
              <Radio
                checked={rateBy && rateBy === '1_STARS_AND_ABOVE'}
                onChange={() => dispatch(filterByRating('1_STARS_AND_ABOVE'))}
              />
            }
            label="1 stars and above"
          />
        </RadioGroup>
      </FormControl>
      <div>Categories</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={categories.includes('shoes')}
              onChange={(e) => handleCategoryChange(e, 'shoes')}
            />
          }
          label="Shoes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={categories.includes('partywear')}
              onChange={(e) => handleCategoryChange(e, 'partywear')}
            />
          }
          label="Partywear"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={categories.includes('formals')}
              onChange={(e) => handleCategoryChange(e, 'formals')}
            />
          }
          label="Formals"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={categories.includes('casuals')}
              onChange={(e) => handleCategoryChange(e, 'casuals')}
            />
          }
          label="Casuals"
        />
      </FormGroup>
      <div>Services</div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={() => dispatch(showCod())} checked={showCodOnly} />}
          label="COD Available"
        />
        <FormControlLabel
          control={
            <Checkbox checked={showFastDeliveryOnly} onClick={() => dispatch(showFastDelivery())} />
          }
          label="Fast Delivery"
        />
      </FormGroup>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Sort by Price</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
          <FormControlLabel
            value="PRICE_LOW_TO_HIGH"
            control={
              <Radio
                checked={sortBy && sortBy === 'PRICE_LOW_TO_HIGH'}
                onChange={() => dispatch(sortProducts('PRICE_LOW_TO_HIGH'))}
              />
            }
            label="Low-to-high"
          />
          <FormControlLabel
            value="PRICE_HIGH_TO_LOW"
            control={
              <Radio
                checked={sortBy && sortBy === 'PRICE_HIGH_TO_LOW'}
                onChange={() => dispatch(sortProducts('PRICE_HIGH_TO_LOW'))}
              />
            }
            label="High-to-low"
          />
        </RadioGroup>
      </FormControl>
    </aside>
  );
};

export { Filters };
