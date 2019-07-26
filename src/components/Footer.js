import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'styles/Footer.css';
import { VisibilityFilters } from 'app/constants/filters'

export default class Footer extends Component {
	static propTypes = {
		setFilter: PropTypes.func.isRequired,
		deleteItems: PropTypes.func.isRequired,
	};

	render() {
		const { count, showClearButton, setFilter, deleteItems } = this.props
		return (
			<div className='footer'>
				<div className='footer__items-count'>
					{count} {(count > 1) ? <span>items</span> : <span>item</span>} left
				</div>
				<div className='footer__buttons'>
					<button className='button' onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>All</button>
					<button className='button' onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
					<button className='button' onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
				</div>
				<button
					className={classNames('button-clear', { 'button-clear_hidden': !showClearButton })}
					onClick={() => deleteItems()}
				>
					Clear Completed
				</button>
			</div>
		);
	}
}