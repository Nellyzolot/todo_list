import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/Footer.css';
import { VisibilityFilters } from '../constants/filters'

export default class Footer extends Component {
    static propTypes = {
        setFilter: PropTypes.func.isRequired,
        deleteItems: PropTypes.func.isRequired,
    };

    handleClick = visibilityFilter => {
        const { setFilter } = this.props;
        setFilter(visibilityFilter);
    };

    clearCompleted = () => {
        const { deleteItems } = this.props
        deleteItems();
    };

    render() {
        const { count, showClearButton } = this.props
        return (
            <div className='footer'>
                <div className='footer__items-count'>{count} {(count > 1) ? <span>items</span> : <span>item</span>} left</div>
                <div className='footer__buttons'>
                    <button className='button' onClick={() => this.handleClick(VisibilityFilters.SHOW_ALL)}>All</button>
                    <button className='button' onClick={() => this.handleClick(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
                    <button className='button' onClick={() => this.handleClick(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
                </div>
                <button className={classNames('button-clear', { 'button-clear_hidden': !showClearButton })} onClick={() => this.clearCompleted()}>Clear Completed</button>
            </div>
        );
    }
}