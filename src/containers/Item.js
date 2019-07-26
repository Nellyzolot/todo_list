import { connect } from 'react-redux';
import { completeItem, deleteItem } from 'app/actions/ItemAction';
import Item from 'app/components/Item';

const mapDispatchToProps = {
	deleteItem,
	completeItem
};

export default connect(null, mapDispatchToProps)(Item);