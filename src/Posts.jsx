import React, { useState, useEffect } from 'react';
import axios from 'axios';

  const Posts = () => {
   const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // GET single post
  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  };

  // POST new post
  const createPost = async (postData) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };

  // PUT update post
  const updatePost = async (id, postData) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        postData
      );
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  // DELETE post
  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1,
    };

    try {
      const createdPost = await createPost(newPost);
      setPosts(prev => [createdPost, ...prev]);
    } catch (err) {
      setError('Failed to create post');
    }
  };

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={handleAddPost}>Add New Post</button>
      <div>
        {posts.slice(0, 5).map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );

    
  }
   
  export default Posts;


