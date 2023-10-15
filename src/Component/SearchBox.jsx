import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults'; // Import the SearchResults component

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://fakestoreapi.com/products?title=${searchTerm}`);
      const data = await response.json();

      setSearchData(data);
      navigate('/SearchResults'); // Navigate to the SearchResults page
    } catch (error) {
      console.error('Error fetching search result');
    }
  };

  return (
    <div className='flex justify-between text-center'>
      <form onSubmit={handleSubmit}>
        <input
          className='input outline-none'
          type='text'
          placeholder='Search Products...'
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

    {/* Rendering the SearchResults component with the searchData */}
      {searchData.length > 0 && <SearchResults searchData={searchData} />}
    </div>
  );
};

export default SearchBox;
