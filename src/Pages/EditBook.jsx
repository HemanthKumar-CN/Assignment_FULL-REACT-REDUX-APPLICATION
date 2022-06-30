import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBooks, updateBooks } from '../Redux/action';
import { useLocation, useNavigate } from 'react-router-dom'




const EditBook = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  // console.log(id)

  const {books} = useSelector(state => state.app)
  const [currentBook, setCurrentBook] = 
  useState({});

  const navigate = useNavigate()
  

  // console.log(books)
  
  

  useEffect(() => {
    
  if(books.length === 0)
  {
    dispatch(getBooks())
  }
    
  }, [books?.length, dispatch])
  

  useEffect(() => {
    if(id)
    {
      const temp = books.find((book)=> book.id === Number(id))

      temp && setCurrentBook(temp);
      temp && setCat(temp.category);
      temp && setBook_name(temp.book_name)
      
      
    }
  
    
  }, [id,books])

 var c = currentBook.category;
  const [cat, setCat] = useState("")
  const [book_name, setBook_name] = useState("")

  console.log(currentBook, cat)


  const handleUpdate =()=> {
    const data = {
      category: cat,
      book_name:book_name
    }
    dispatch(updateBooks(id,data))

    navigate(`/books/${id}`)
    
  }

  return (
    <div>
      <h2>Edit</h2>
      <div>
      <label><b>Category:</b></label>
      <input type="text" value={cat} onChange={(e)=> setCat(e.target.value)}  />
      </div>
      <div>
      <label><b>Book Name:</b></label>
      <input type="text" value={book_name} onChange={(e)=> setBook_name(e.target.value) }   />
      </div>

      <button onClick={handleUpdate}>Save</button>

    </div>
  )
}

export default EditBook