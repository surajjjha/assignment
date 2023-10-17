// src/components/RequestForm.js
import React, { useState } from 'react';
import ResponseDisplay from './ResponseDisplay';

const RequestForm = ({ onRequestSubmit }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(url, { method });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
      setResponse({ error: 'An error occurred.' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ResponseDisplay response={response} />
    </div>
  );
};

export default RequestForm;
