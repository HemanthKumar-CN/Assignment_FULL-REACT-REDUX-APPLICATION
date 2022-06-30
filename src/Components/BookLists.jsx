import React, { useEffect } from 'react'
import BookCard from './BookCard'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getBooks } from '../Redux/action';

const BookLists = () => {
  const dispatch = useDispatch();
    const [searchParams] =  useSearchParams();

    const {books} = useSelector(state=> state.app)
    const location = useLocation()

    useEffect(() => {
        const urlCategory = searchParams.getAll('category');
        const urlSort = searchParams.get('sortBy');
      if(books.length===0 || location.search)
      {
        const sortBy = searchParams.get('sortBy')
        let getTodoParams = {
          params: {
            category: searchParams.getAll("category"),
            _sort: sortBy && "release_year",
            _order: sortBy
          }
        }
        dispatch(getBooks(getTodoParams))
      }
        
    }, [location.search])
  return (
    <>
        {books.length>0 && books.map(item => {
            return (
                <BookCardWrapper key={item.id}>
                
                <Link to={`/books/${item.id}`}><BookCard data={item}/></Link>
                </BookCardWrapper>
            )
        } )}
    </>
  )
}

export default BookLists


const BookCardWrapper = styled.div`
    border: 1px solid blue;
    padding:5px;
    width:310px;
    cursor: pointer;
`;