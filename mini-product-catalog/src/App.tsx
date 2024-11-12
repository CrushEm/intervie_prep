import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CatagoryFilter from './components/CatagoryFilter';

import { ProductItemType } from './components/ProductItem';
import ProductDetails from './components/ProductDetails';

import MultiSelectDropdown from './components/MutliSelectDropdown';

const list = [
  {
    "id": 1,
    "name": "Product A",
    "price": 19.99,
    "category": "Electronics",
    "description": "A high-quality electronic product",
    "imageURL": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "name": "Product B",
    "price": 9.99,
    "category": "Books",
    "description": "An engaging book to read",
    "imageURL": "https://via.placeholder.com/150"
  },
  // Add more products as needed
]

function App() {

  const [selectDetails, setSelectDetails] = useState<ProductItemType>();
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterList, setFilterList] = useState<string[]>([]);

  function onItemClick(item: ProductItemType) {
    console.log(item);
    setSelectDetails(item);
  }

  function updateSearch(search: string) {
    console.log(search);
    setSearchInput(search);
  }

  // useEffect(() => {
  //   //update details
  // }, [selectDetails]);


  return (
    <div>
      <header>
        <SearchBar updateSearch={updateSearch}></SearchBar>
        {/* <CatagoryFilter></CatagoryFilter> */}
        <MultiSelectDropdown options={['orange', 'tan', 'bluegreen']}></MultiSelectDropdown>
      </header>
      <h2>Product Catagory</h2>
      <div className="View-Product">
        <ProductList list={list} onclick={onItemClick}  search={searchInput} filters={filterList} ></ProductList>
        {selectDetails &&  <ProductDetails details={selectDetails}></ProductDetails>}
      </div>
    </div>
  );
}

export default App;
