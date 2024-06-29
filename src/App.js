import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchNumber = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${9}/`);
    return await response.json();
  };

  const handleAddRecord = async () => {
    try {
      const response = await fetchNumber();
      setData([...data, response]);
    } catch (error) {
      console.error('Error fetching random character:', error);
    }
  };

  const handleDeleteRecord = (index) => {
    const updatedCharacters = [...data];
    updatedCharacters.splice(index, 1);
    setData(updatedCharacters);
  };

  return (
    <div className="container">
      <button onClick={handleAddRecord}>Add Record</button>
      <table id="characterTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.gender}</td>
              <td><button onClick={() => handleDeleteRecord(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
