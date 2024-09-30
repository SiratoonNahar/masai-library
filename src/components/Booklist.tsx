import React, { useEffect, useState } from 'react';
import { database } from '../firebase/firebaseConfig';
import { ref, get } from 'firebase/database';

interface Book {
    id: string;
    title: string;
    author: string;
}

const BookList: React.FC<{ borrowedBooks: string[], onBorrow: (bookId: string) => void, onReturn: (bookId: string) => void }> = ({ borrowedBooks, onBorrow, onReturn }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await get(ref(database, 'books'));
                const data = response.val();
                setBooks(data || []);
            } catch (err) {
                setError('Failed to load books.');
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    {borrowedBooks.includes(book.id) ? (
                        <button onClick={() => onReturn(book.id)}>Return</button>
                    ) : (
                        <button onClick={() => onBorrow(book.id)}>Borrow</button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default BookList;
