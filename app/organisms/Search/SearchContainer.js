import {connect} from 'react-redux';
import SearchComponent from './SearchComponent';
import getItemsSagas from '../../middleware/searchSaga';

function mapStateToProps(state) {
  return {
    ...state.searchReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: () => {
      dispatch(getItemsSagas());
    },
  };
}

export default SearchComponent;
