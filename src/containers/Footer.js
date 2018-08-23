import { connect } from 'react-redux';
import { setFilter, deleteItems } from '../actions/ShowAction';
import Footer from '../components/Footer';
import { getCountOfItems } from '../selectors/count'
import { showClearButton } from '../selectors/showClearButton'

const mapStateToProps = state => ({
  count: getCountOfItems(state),
  showClearButton: showClearButton(state)
});

const mapDispatchToProps = {
  setFilter,
  deleteItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);