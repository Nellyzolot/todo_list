import { connect } from 'react-redux';
import { addItem } from '../actions/ItemAction';
import List from '../components/List';
import { getVisibleItems } from '../selectors/filters'

const mapStateToProps = state => ({
  items: getVisibleItems(state),
  isItemExist: state.itemReducer.isItemExist
});

export default connect(mapStateToProps, { addItem })(List);