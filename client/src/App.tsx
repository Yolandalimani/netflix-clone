import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    // Make a request to the server to get the data
    axios.get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data.message); // Update state with the response message
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Runs once when the component mounts

  return (
    <div>
      <h1>Data from Server:</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
