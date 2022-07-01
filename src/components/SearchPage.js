import React from 'react'
import ShelfSearch from './SearchShelf';
import {
    Link
  } from "react-router-dom";

const Search = ({handleSearch, search, booksFromSearch, changeShelf, loadSearch}) => {
    
  return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={handleSearch} value={search}/>
              </div>
            </div>
            <ShelfSearch booksFromSearch={booksFromSearch} changeShelf={changeShelf} loadSearch={loadSearch} search={search}/>
          </div>
    )
}

export default Search;
