import React from 'react'

const Sort = ({ sortOption, setSortOption }) => {
  return (
     <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Rating: High to Low</option>
    </select>
  );

}

export default Sort