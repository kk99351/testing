// import React from 'react'

// function AddNewAssetCreate() {
//   return (
//     <div>AddNewAssetCreate</div>
//   )
// }

// export default AddNewAssetCreate
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use Axios for API requests

const AddNewAssetCreate=() =>{
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      // Make API call to fetch data based on searchQuery
      axios.get(`your-api-endpoint?search=${searchQuery}`)
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedItem(null); // Reset selectedItem when user types in the search field
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSearchQuery(''); // Clear search query after selecting an item
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="form-control"
      />
      
      {selectedItem ? (
        <div>
          {/* Display selected item details */}
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
        </div>
      ) : (
        <div>
          {/* Display input fields if no item is selected */}
          <input type="text" className="form-control" placeholder="Input 1" />
          <input type="text" className="form-control" placeholder="Input 2" />
          <input type="text" className="form-control" placeholder="Input 3" />
        </div>
      )}

      {/* Display search results */}
      <ul>
        {searchResults.map(item => (
          <li key={item.id} onClick={() => handleSelectItem(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddNewAssetCreate;
