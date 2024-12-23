import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [options, setOptions] = useState({
    alphabets: true,
    numbers: true,
    highest_lowercase_alphabet: true
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowResponse(false);

    try {
      const parsedInput = JSON.parse(input);

      // Get the backend URL from the environment variable
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      // Use the backendUrl in your axios.post call
      const res = await axios.post(`https://bajaj-backend-65s7.onrender.com/bfhl`, parsedInput);

      setResponse(res.data);
      setShowResponse(true);

      setTimeout(() => {
        setShowDropdown(true);
      }, 100);
    } catch (err) {
      console.error(err);
      setError('Invalid JSON or server error');
      setShowDropdown(false);
    }
  };

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setOptions(prevOptions => ({ ...prevOptions, [name]: checked }));
  };

  const filteredResponse = () => {
    if (!response) return null;
    const filtered = {};
    for (const key in response) {
      if (options[key] && response[key] !== undefined) {
        filtered[key] = response[key];
      }
    }
    return filtered;
  };

  return (
    <div className="container">
      <h1 className="heading">Bajaj Finserv Health Challenge (Qualifier 1)</h1>
      <div className="info">
        <p className="info-item">Name: Gaurav Chaudhary</p>
        <p className="info-item">Mail: gaurav.chaudhary2021@vitstudent.ac.in</p>
        <h2 className="scroll-heading">Scroll down to see the full response and dropdown menu after sumbit</h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here...'
          className="textarea"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {showResponse && response && (
        <pre className="response-output">{JSON.stringify(response, null, 2)}</pre>
      )}
      {showDropdown && (
        <div className="dropdown-container">
          <label>
            <input
              type="checkbox"
              name="alphabets"
              checked={options.alphabets}
              onChange={handleOptionChange}
            />
            Alphabets
          </label>
          <label>
            <input
              type="checkbox"
              name="numbers"
              checked={options.numbers}
              onChange={handleOptionChange}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              name="highest_lowercase_alphabet"
              checked={options.highest_lowercase_alphabet}
              onChange={handleOptionChange}
            />
            Highest lowercase alphabet
          </label>
        </div>
      )}
      {filteredResponse() && (
        <pre className="response-output">{JSON.stringify(filteredResponse(), null, 2)}</pre>
      )}
    </div>
  );
};

export default App;