import React from 'react';

const listItemStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  backgroundColor: '#f5f5f5',
};

const titleStyle = {
  fontWeight: 'bold',
};

const ResponseDisplay = ({ response }) => {
  return (
    <div>
      <h2>Response:</h2>
      {response && Array.isArray(response) ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {response.map((item) => (
            <li key={item.id} style={listItemStyle}>
              <p style={titleStyle}>Title: {item.title}</p>
              <p>Body: {item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
