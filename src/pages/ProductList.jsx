//  const books = [
//    {
//      bookid: 1,
//      title: 'Atomic Habits',
//      author: 'James Clear',
//      category: 'Self Help',
//      price: 399,
//      bokimage: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
//    },
//    {
//      id: 2,
//      title: 'Rich Dad Poor Dad',
//      author: 'Robert Kiyosaki',
//      category: 'Finance',
//      price: 299,
//      image: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
//    },

import { useEffect, useState } from "react";
import axios from "axios";

// ];

const ProductList=() => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:2911/ProductList').then(result=>{setBooks(result.data)});

    
    },[]);
return (
<>
      <main className="landing-main">
        <section className="book-section">
          <h2>Books</h2>n
          <div className="book-grid">
            {books.map((book) => (
              <div className="book-card" key={book.bookid}>
                <img src={book.bokimage} alt={book.title} className="book-image" />
                <h4>{book.title}</h4>
                <p className="author">By {book.author}</p>
                <p className="price">₹{book.price}</p>
                <button className="view-btn">View More</button>
              </div>
            ))}
          </div>
        </section>
      </main>
</>

);
};


export default ProductList;

