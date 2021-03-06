import PropTypes from 'prop-types';

export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const SET_FILTER = 'SET_FILTER';

export const itemProps = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool.isRequired,
};
