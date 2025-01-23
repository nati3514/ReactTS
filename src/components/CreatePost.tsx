import React, { useState } from 'react';
import { Post } from '../types';

interface CreatePostProps {
  onSubmit: (post: Omit<Post, 'id' | 'comments'>) => void;
}

export default function CreatePost({ onSubmit }: CreatePostProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({
        title,
        content,
        author: {
          id: 'current-user',
          name: 'Current User',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
        },
        createdAt: new Date().toISOString(),
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="card">
      <h2 className="post-title">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            required
          />
        </div>
        
        <div className="form-footer">
          <button type="submit" className="button button-primary">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}