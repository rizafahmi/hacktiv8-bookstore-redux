import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import components
import { selectBook } from '../actions/index.js'

class BookList extends React.Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
        className='list-group-item'>{book.title}</li>
      )
    })
  }
  render () {
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    )

  }
}

const mapStateToProps = (state) => {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// Make selectBook available through Props
const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook is called, the result should be passed
  // to all our reducers
  return bindActionCreators({selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
