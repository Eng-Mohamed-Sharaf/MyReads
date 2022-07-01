import React,{useState,useEffect} from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/HomePage";
import Search from "./components/SearchPage";

function BooksApp() {
  
    const [books,setbooks] = useState([]);
    const [search,setsearch]= useState('');
    const [booksFromSearch,setbooksFromSearch] =useState([]);
    const [loadSearch,setloadSearch] = useState(false);

  useEffect(()=> {
    const getbooks =async()=>{
    const res = await BooksAPI.getAll();
    setbooks(res);    
  };
  getbooks();
  },[]);

    const handleSearch = async (event) => {
      await setsearch(event.target.value);
      console.log(search);
      if(search){
      handleBooksSearch(search);}}
  

  
  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const res = await BooksAPI.getAll();
    setbooks(res);
    handleBooksSearch(search)
  }


  const handleBooksSearch = async (search) => {
    if(search!==""){
    const res = await BooksAPI.search(search)
     if (res && !res.error&&booksFromSearch) {
          const data = res.map((booksSearch) => {
            books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
            })
            return booksSearch;
          });

          setloadSearch(true);
          setbooksFromSearch(data); 
      } else {
          setloadSearch(false);
        }
      }
    console.log("Search");
    console.log(booksFromSearch);}


  

    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/"
             element = {<Home books={books} changeShelf={changeShelf} />}/>
            <Route path="/SearchPage"
               element = {<Search
                handleSearch={handleSearch}
                search={search}
                booksFromSearch={booksFromSearch}
                changeShelf={changeShelf}
                loadSearch={loadSearch}/>}/>

            </Routes>
        </div>
        </BrowserRouter>
    );
               
}

export default BooksApp;
