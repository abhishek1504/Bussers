import {connect} from 'react-redux';
import SearchComponent from './SearchComponent';
import {setProducts} from '../../redux/actions/productsActions';

function mapStateToProps(state) {
  return {
    ...state.productReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setItems: (productItems) => {
      dispatch(setProducts(productItems));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
