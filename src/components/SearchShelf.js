import React from 'react'
import Book from './books'


const ShelfSearch=(({changeShelf,booksFromSearch,loadSearch,search})=> {
    
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">Search</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {
                     loadSearch ? (
                         booksFromSearch.map((book)=>(        
                         <Book key={book.id}  book={book} changeShelf={changeShelf}/>        
                         ))
                     ): (
                      `No books like: " ${search} "`
                     )
                 }
                </ol>
              </div>
            </div>  
    )     
    
})

export default ShelfSearch;