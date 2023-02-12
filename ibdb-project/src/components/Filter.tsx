import React, { useEffect, useLayoutEffect, useState } from 'react';
import 'firebase/firestore';
import firebaseControl from '../firebaseControl';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IBook } from './IBook';
import { DocumentData } from 'firebase/firestore';
import Header from './Header';


const Filter = () => {

    const firebaseController = new firebaseControl();
    const [books, setBooks] = useState<DocumentData[]>([]);
    const { filter } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (filter === "highestRated") {
            firebaseController
                .getBooks()
                .then(books => setBooks(books.sort((book1, book2) => book2.rating - book1.rating)));
        }
        else if (filter === "newest") {
            firebaseController
                .getBooks()
                .then(books => setBooks(books.sort((book1, book2) => book2.releaseYear - book1.releaseYear)));
        }
        else if (filter === "fiction") {
            firebaseController
                .getBooks()
                .then(books => setBooks(books.filter(book => book.genre === "Fiction")));
        }
        return
    }, [filter]);

    console.log(books);

    return (
        <div>
            <div className="navbar navbar-expand-lg shadow-md pb-5 px-10 bg-bigBoy relative flex items-center w-full justify-center space-x-10">
                <p>Filtere: </p>
                <button>
                    <Link to="/filteredBooks/highestRated" className="px-5 py-2 rounded-lg bg-hvit shadow" >Høyest rating</Link>
                </button>
                <button>
                    <Link to="/filteredBooks/newest" className="px-5 py-2 rounded-lg bg-hvit shadow" >Nyeste</Link>
                </button>
                <button>
                    <Link to="/filteredBooks/fiction" className="px-5 py-2 rounded-lg bg-hvit shadow" >Fiction</Link>
                </button>
            </div>
            <div className="grid grid-cols-3">
                {books.map((book) => (
                    <div key={book.id} className="grid place-items-center border-4 ml-100">
                        <h1 className="text-xl">Title: {book.title}</h1>
                        <img src={book.imgURL} width="200" height="300" className='cursor-pointer' onClick={() => navigate(`/bookPage/${book.id}`)} />
                        <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                            Legg til i favoritter
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;