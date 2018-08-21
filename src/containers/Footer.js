import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showActive, showCompleted, deleteItems} from '../actions/ShowAction';
import Footer from '../components/Footer';

const mapStateToProps = state => ({
    items: state.itemReducer.items,
  });

const mapDispatchToProps = dispatch => bindActionCreators({
  showActive,
  showCompleted,
  deleteItems
  }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);