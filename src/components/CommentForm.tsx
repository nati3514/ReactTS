import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
          className="form-textarea"
          required
        />
      </div>
      <div className="form-footer">
        <button type="submit" className="button button-primary">
          Submit
        </button>
      </div>
    </form>
  );
}