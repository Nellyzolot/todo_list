import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import ReactDOM from 'react-dom';
import '../styles/Item.css';

class Item extends Component {
  static propTypes = {
    completeItem: PropTypes.func.isRequired,
    };

  handleClick = (id) => {
    const {completeItem} = this.props
    completeItem(id, ReactDOM.findDOMNode(this.refs.checkbox_item).checked);
  };

  deleteItem = (id) => {
    const {deleteItem} = this.props
    deleteItem(id);
  };

  render() {
    const {id, text, isCompleted} = this.props
    return (
        <li className={classNames('list-item', {'list-item__text_checked': isCompleted})}>
            <input type='checkbox' className={classNames('list-item__button', {'list-item__button_checked': isCompleted})} ref='checkbox_item' onClick={() => this.handleClick({id})}/>
            <div className='list-item__text'>{text}</div>
            <button className='list-item__close' onClick={() => this.deleteItem({id})}/>
        </li>
    );
  }
}

export default Item;