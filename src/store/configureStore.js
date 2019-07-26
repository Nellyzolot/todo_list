import { createStore } from 'redux'
import rootReducer from 'app/reducers'

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState)

	return store
}