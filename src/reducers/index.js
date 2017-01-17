import { combineReducers } from 'redux'
import BooksReducer from './reducer_books.js'

const rootReducers = combineReducers({
  books: BooksReducer
})

export default rootReducers
