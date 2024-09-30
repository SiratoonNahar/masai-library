import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: string | null;
    borrowedBooks: string[];
}

const initialState: UserState = {
    id: null,
    borrowedBooks: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        setBorrowedBooks(state, action: PayloadAction<string[]>) {
            state.borrowedBooks = action.payload;
        },
        addBorrowedBook(state, action: PayloadAction<string>) {
            state.borrowedBooks.push(action.payload);
        },
        removeBorrowedBook(state, action: PayloadAction<string>) {
            state.borrowedBooks = state.borrowedBooks.filter(bookId => bookId !== action.payload);
        },
    },
});

export const { setUser, setBorrowedBooks, addBorrowedBook, removeBorrowedBook } = userSlice.actions;
export default userSlice.reducer;
