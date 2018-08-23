import { connect } from 'react-redux';
import { completeItem, deleteItem } from '../actions/ItemAction';
import Item from '../components/Item';

const mapStateToProps = state => ({
  items: state.itemReducer.items,
});

const mapDispatchToProps = {
  deleteItem,
  completeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);