import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from '../actions/ItemAction';
import List from '../components/List';

const mapStateToProps = state => ({
    items: state.itemReducer.items,
    isItemExist: state.itemReducer.isItemExist
  });

const mapDispatchToProps = dispatch => bindActionCreators({
    addItem
  }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);