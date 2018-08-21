import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/Footer.css';

class Footer extends Component {

    static propTypes = {
        showActive: PropTypes.func.isRequired,
        showCompleted: PropTypes.func.isRequired,
        deleteItems: PropTypes.func.isRequired,
    };

    showAll = () => {
        const {showActive, showCompleted} = this.props
        showCompleted(true);
        showActive(true);
    };

    showActive = () => {
        const {showActive, showCompleted} = this.props
        showCompleted(false);
        showActive(true);
    };

    showCompleted = () => {
        const {showActive, showCompleted} = this.props
        showCompleted(true);
        showActive(false);
    };

    clearCompleted = () => {
        const {deleteItems} = this.props
        deleteItems();
    };

  render() {
    const {length, showClear} = this.props
    return (
        <div className='footer'>
            <div className='footer__items-count'>{length} {(length > 1) ?  <span>items</span>  : <span>item</span> } left</div>
            <div className='footer__buttons'>
                <button className='button' onClick={() => this.showAll()}>All</button>
                <button className='button' onClick={() => this.showActive()}>Active</button>
                <button className='button' onClick={() => this.showCompleted()}>Completed</button>
            </div>
            <button className={classNames('button-clear', {'button-clear_hidden': showClear===0})} onClick={() => this.clearCompleted()}>Clear Completed</button>
        </div>
    );
  }
}

export default Footer;