import { Drawer, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from '../../features/filters/filters';
import { toggleFilters } from '../../features/filters/filterSlice';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterDrawer = () => {
  const dispatch = useDispatch();
  const { isFilterOpen } = useSelector((store) => store.filters);
  return (
    <div>
      <span className=" icon" onClick={() => dispatch(toggleFilters())}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <span className="bold">Show Filters</span>
      </span>

      <Drawer anchor="left" open={isFilterOpen} onClose={() => dispatch(toggleFilters())}>
        <Filters />
      </Drawer>
    </div>
  );
};

export { FilterDrawer };
