import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {completeItem, deleteItem} from '../actions/ItemAction';
import Item from '../components/Item';

const mapStateToProps = state => ({
    items: state.itemReducer.items,
  });

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteItem,
    completeItem
  }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Item);