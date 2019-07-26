import { connect } from 'react-redux';
import { addItem } from 'app/actions/ItemAction';
import List from 'app/components/List';
import { getVisibleItems, getItems } from 'app/selectors/filters'

const mapStateToProps = state => ({
	items: getVisibleItems(state),
	shouldShowFooter: getItems(state).length > 0,
});

export default connect(mapStateToProps, { addItem })(List);