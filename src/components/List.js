import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Item from '../containers/Item'
import Footer from '../containers/Footer'

class List extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        isItemExist: PropTypes.bool.isRequired,
        addItem: PropTypes.func.isRequired,
        };

    handleSubmit = event => {
        const {addItem} = this.props;
        event.preventDefault();
        addItem(ReactDOM.findDOMNode(this.refs.item_name).value);
        ReactDOM.findDOMNode(this.refs.item_name).value = null;
        };

  render() {
    const {items, isItemExist} = this.props;
    return (
        <div className='list'>
            <form className='list__form' onSubmit={this.handleSubmit.bind(this)}>
                <input 
                className='list__input' 
                placeholder='Write sentence'
                name='item_name'
                ref='item_name'
                ></input>
            </form>
            {(isItemExist) ?
                <div>
                    <ul>
                    {items.map((item) => (
                        (item.visible) ? 
                        <Item key={item.id} id={item.id} text={item.text} isCompleted={item.isCompleted}/>
                        : null
                    ))}
                    </ul>
                    <Footer length={items.filter((item) => (item.isCompleted===false)).length} showClear={items.filter((item) => (item.isCompleted===true)).length}/>
                </div>
                : null
            }
        </div>
    );
  }
}

export default List;