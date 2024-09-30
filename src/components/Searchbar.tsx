import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    React.useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    return (
        <input
            type="text"
            placeholder="Search books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;
