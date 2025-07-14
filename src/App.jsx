import { useState } from 'react'
import productsData from './data/product.js';
import Header from './components/Header'
import SearchBar from "./components/SearchBar.jsx";
import Filter from "./components/Filter.jsx"
import Sort from './components/sort.jsx';
import ProductList from './components/ProductList.jsx';




function App() {
    const [SearchTerm, setSearchTerm] = useState('');
    const[selectedCategory,setSelectedCategory]=useState('')
    const[sortOption,setSortOption]=useState("")

     const categories = [...new Set(productsData.map(p => p.category))];

      let filtered = productsData.filter(product =>
    product.name.toLowerCase().includes(SearchTerm.toLowerCase())
  );

  if (selectedCategory) {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }


       if (sortOption === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
    <div>
   <Header/>
   
   <div>
    <SearchBar SearchTerm={SearchTerm} setSerachTerm={setSearchTerm}/>
    <Filter categories={categories} selectedcategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <Sort sortOption={sortOption} setSortOption={setSortOption} />
   </div>
      <ProductList products={filtered} />
   </div>
    </>
  )
}

export default App
