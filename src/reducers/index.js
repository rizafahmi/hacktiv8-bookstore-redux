import { combineReducers } from 'redux'
import BooksReducer from './reducer_books.js'

import { ActiveBook } from './reducer_active_book.js'

const rootReducers = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducers
