import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookLists from '../Components/BookLists';
import FilterSort from '../Components/FilterSort';
import { getBooks } from '../Redux/action';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const Books = () => {

    
    
    // console.log(books)
  return (
    <div>
        <h1>Books</h1>
        <BookPageWrapper>

        <FilterSortWrapper>
        <FilterSort/>
        </FilterSortWrapper>

        <BookListWrapper>
        <BookLists  />
        </BookListWrapper>
        </BookPageWrapper>
    </div>
  )
}

export default Books


const BookPageWrapper = styled.div`
    display: flex;
`;

const FilterSortWrapper = styled.div`
    width: 300px;
    border: 1px solid red;
`;

const BookListWrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
    grid-gap: 16px;
    justify-content:center;
    padding: initial;
`;