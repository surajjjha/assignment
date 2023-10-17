import React, { useState } from 'react';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = async () => {
    const newPost = {
      title,
      body,
      userId: 1, // Replace with the appropriate user ID if needed
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.status === 201) {
        const createdPost = await response.json();
        console.log('New post created:', createdPost);
        // You can update the UI or perform additional actions upon successful creation
      } else {
        console.error('Failed to create a new post.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={createPost}>
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
