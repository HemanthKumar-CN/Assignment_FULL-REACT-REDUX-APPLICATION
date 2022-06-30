import React from 'react'

const BookCard = ({data}) => {
  return (
    <div>
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/41Leq5xMp7L._AC_UL600_SR600,600_.jpg" width="100%" alt="" />
            <div>{data.book_name}</div>
            <div>{data.release_year}</div>
            <div>{data.category}</div>
        </div>
    </div>
  )
}

export default BookCard