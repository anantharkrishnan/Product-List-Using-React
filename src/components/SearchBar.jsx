import React from 'react'

const SearchBar = ({SearchTerm,setSerachTerm}) => {
  return (
    <input type="text" placeholder='search products..' value={SearchTerm} onChange={(e)=>setSerachTerm(e.target.value)} className="border p-2 rounded w-full md:w-1/3 "/>
  )
}

export default SearchBar