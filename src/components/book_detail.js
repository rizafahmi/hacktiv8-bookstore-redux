import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div><em>Pages: {this.props.book.pages}</em></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
