import PropTypes from 'prop-types';

import { StyledFilter } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'globalStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <StyledFilter>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </StyledFilter>
    </>
  );
};

Filter.propsTypes = {
  filter: PropTypes.string,
};

export default Filter;
