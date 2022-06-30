import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/action';

const SingleBook = () => {

  const {id}= useParams();

  const {books} =useSelector(state => state.app);

  const [currentBook, setCurrentBook] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    if(books.length === 0)
    {
      dispatch(getBooks())
    }
    

  }, [books?.length, dispatch]);
  

  useEffect(() => {
    if(id)
    {
      const temp = books.find((book)=> book.id === Number(id))
      temp && setCurrentBook(temp)
    }
  

  }, [books,id])
  
  // console.log(id,books)
  return (
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/I/41Leq5xMp7L._AC_UL600_SR600,600_.jpg" width={`50%`} alt="" />
      <br />
      <b>Book:</b> {currentBook.book_name}
      <br />
      <b>Author:</b> {currentBook.author}
      <br />
      <b>Category:</b> {currentBook.category}
      <br />
      <b>Released Year:</b> {currentBook.release_year}
      <br />
      <button> <Link to={`/books/${currentBook.id}/edit`}>Edit</Link> </button>
    </div>
  )
}

export default SingleBook