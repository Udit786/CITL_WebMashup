import React from 'react';

const SearchBar = ({ location, setLocation, onSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
