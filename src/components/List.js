import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Item from 'app/containers/Item'
import Footer from 'app/containers/Footer'
import { itemProps } from 'app/constants/items';

export default class List extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape(itemProps)),
		shouldShowFooter: PropTypes.bool.isRequired,
		addItem: PropTypes.func.isRequired,
	};

	static defaultProps = {
		items: [],
	}

	state = {
		textValue: '',
	}

	handleSubmit = event => {
		const { addItem } = this.props;
		event.preventDefault();
		addItem(this.state.textValue);
		this.setState({textValue: ''});
	};

	handleChangeInput = (event) => this.setState({
		textValue: event.currentTarget.value
	});

	render() {
		const { items, shouldShowFooter } = this.props;
		return (
			<div className='list'>
				<form className='list__form' onSubmit={this.handleSubmit}>
					<input
						className='list__input'
						placeholder='Write sentence'
						name='item_name'
						onChange={this.handleChangeInput}
						value={this.state.textValue}
					></input>
				</form>
				<div>
				{(items.length > 0) &&
					<ul>
						{items.map(item =>
							<Item key={item.id} id={item.id} text={item.text} isCompleted={item.isCompleted} />
						)}
					</ul>
				}
				{shouldShowFooter && items.length === 0 &&
					<span>No items</span>
				}
				{shouldShowFooter && <Footer />}
				</div>
			</div>
		);
	}
}