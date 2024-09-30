import { useEffect, useState } from 'react';
import { database } from '../firebase/firebaseConfig';
import { ref, get } from 'firebase/database';
import { useSelector, useDispatch } from 'react-redux';
import { addBorrowedBook, removeBorrowedBook, setBorrowedBooks } from '../redux/userSlice';

const useBorrowing = (userId: string | null) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const borrowedBooks = useSelector((state: any) => state.user.borrowedBooks);

    useEffect(() => {
        if (userId) {
            const fetchBooks = async () => {
                setLoading(true);
                const response = await get(ref(database, `users/${userId}/borrowedBooks`));
                const data = response.val() || [];
                dispatch(setBorrowedBooks(data));
                setLoading(false);
            };
            fetchBooks();
        }
    }, [userId, dispatch]);

    const borrowBook = (bookId: string) => {
        dispatch(addBorrowedBook(bookId));
        // Add code to update Firebase
    };

    const returnBook = (bookId: string) => {
        dispatch(removeBorrowedBook(bookId));
        // Add code to update Firebase
    };

    return { loading, borrowedBooks, borrowBook, returnBook };
};

export default useBorrowing;
