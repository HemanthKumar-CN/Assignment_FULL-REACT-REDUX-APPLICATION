import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getBooks } from '../Redux/action'

const FilterSort = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const urlCategory = searchParams.getAll('category')
    const urlSort = searchParams.get('sortBy')
    const [category, setCategory] = useState(urlCategory || [])

    const dispatch = useDispatch()

    

    const [sortBy, setSortBy] = useState( urlSort || '');

    // console.log(urlCategory,urlSort)

    const handleCheckbox = (e) => {
        const option = e.target.value;

        let newCategory = [...category];

        if(category.includes(option))
        {
            newCategory.splice(newCategory.indexOf(option),1);
        }
        else
        {
            newCategory.push(option)
        }

        setCategory(newCategory)
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
    }


    useEffect(() => {
      if(category || sortBy)
      {
        let params = {};
        category && (params.category = category)
        sortBy && (params.sortBy = sortBy)
        setSearchParams(params)
        // dispatch(getBooks({params: {category}}))
      }
    
      
    }, [category,sortBy, dispatch, setSearchParams])


    // useEffect(() => {
    //   if(sortBy)
    //   {
    //     const params = {
    //     category: searchParams.getAll('category'),
    //     sortBy
        
    //     };

    //     const getBooksParams = {
    //         params:{
    //             category: searchParams.getAll('category'),
    //             _sort: "release_year",
    //             _order: sortBy
    //         }
    //     }

    //     setSearchParams(params)
    //     // dispatch(getBooks(getBooksParams))
    //   }
    
        
    // }, [setSearchParams, dispatch, sortBy])
    


    // console.log(sortBy)

  return (
    <div>
        <h2>Filter</h2>
        <div>
            <div>
                <input type="checkbox"  onChange={handleCheckbox} name="" id="" value="Novel" defaultChecked={category.includes('Novel')} />
                <label htmlFor="">Novel</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckbox} name="" id="" value='Thriller' defaultChecked={category.includes('Thriller')} />
                <label htmlFor="">Thriller</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckbox} name="" id="" value='Motivational' defaultChecked={category.includes('Motivational')} />
                <label htmlFor="">Motivational</label>
            </div>
            <div>
                <input type="checkbox"  onChange={handleCheckbox}name="" id="" value='Science_Fiction' defaultChecked={category.includes('Science_Fiction')} />
                <label htmlFor="">Science-Fiction</label>
            </div>
        </div>

        <h2>Sort</h2>
        <div>
            <input type="radio" name="sortBy" value='asc' onChange={handleSort} defaultChecked={sortBy === 'asc'} id=""  /> Ascending 
            <input type="radio" name="sortBy" value='desc' onChange={handleSort} defaultChecked={sortBy === 'desc'} id="" />Descending 
        </div>
    </div>
  )
}

export default FilterSort