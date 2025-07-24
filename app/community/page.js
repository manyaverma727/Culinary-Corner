'use client';

import "../../styles/community.css";
import { useEffect, useState } from 'react';

export default function Community() {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then(data => setComments(data.comments.slice(0, 10))); // Limit to 10
  }, []);

  const handlePost = () => {
    if (!userComment.trim()) return;
    const newComment = {
      id: Date.now(),
      user: { username: 'You' },
      body: userComment,
    };
    setUserComments([newComment, ...userComments]);
    setUserComment('');
  };

  return (
    <div className="community-page">
      <h1>🍲 Community Discussions</h1>

      <div className="post-box">
        <textarea
          placeholder="Share your thoughts..."
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      <div className="comment-list">
        {userComments.concat(comments).map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.user?.username || 'Anonymous'}</strong>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}