import React, { Component } from 'react';

import BookList from './components/book_list.js'
import BookDetail from './components/book_detail.js'

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}

export default App
