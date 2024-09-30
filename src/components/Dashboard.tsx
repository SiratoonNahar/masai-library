import React from 'react';
import { useSelector } from 'react-redux';
import useBorrowing from '../hooks/useBorrowing';
import BookList from './Booklist';
import SearchBar from './Searchbar';
import useAuth from '../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const { borrowedBooks, borrowBook, returnBook } = useBorrowing(user?.uid);
    
    const handleSearch = (query: string) => {
        // Implement search filtering logic here
    };

    return (
        <div>
            <h1>Welcome to the Library, {user?.email}</h1>
            <button onClick={logout}>Logout</button>
            <SearchBar onSearch={handleSearch} />
            <BookList borrowedBooks={borrowedBooks} onBorrow={borrowBook} onReturn={returnBook} />
        </div>
    );
};

export default Dashboard;
