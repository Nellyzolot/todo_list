import { connect } from 'react-redux';
import { setFilter, deleteItems } from 'app/actions/ShowAction';
import Footer from 'app/components/Footer';
import { getCountOfItems } from 'app/selectors/count'
import { showClearButton } from 'app/selectors/showClearButton'

const mapStateToProps = state => ({
	count: getCountOfItems(state),
	showClearButton: showClearButton(state)
});

const mapDispatchToProps = {
	setFilter,
	deleteItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);