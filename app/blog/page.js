'use client';
import React, { useEffect, useState } from 'react';
import "../../styles/blog.css";
import Image from 'next/image';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
      .then(response => response.json())
      .then(data => {
        setBlogs(data.meals || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <h1 className="page-title">Latest Food Blogs</h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.strMealThumb || 'https://via.placeholder.com/300x200?text=No+Image'} 
                alt={blog.strMeal} 
                className='blog-image'
              />
              <div className="blog-content">
              <h2 className='blog-title'>{blog.strMeal}</h2>
              <p className='blog-description'>{blog.strInstructions.slice(0, 100)}...</p>
                <div className="blog-actions">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">🔗 Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;