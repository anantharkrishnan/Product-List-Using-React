import React from 'react'

const Filter = ({categories,selectedCategory,setSelectedCategory}) => {
  return (
    <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)} className='border p-2 rounded'>
        
   
    <option value="">All Category</option>
    {categories.map((category,id)=>(
        <option key={id} value={category}>{category}</option>
    ))}
     </select>
  )
}

export default Filter