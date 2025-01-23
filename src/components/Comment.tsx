import React, { useState } from 'react';
import { Reply } from 'lucide-react';
import { Comment as CommentType } from '../types';
import CommentForm from './CommentForm';

interface CommentProps {
  comment: CommentType;
  onAddReply: (reply: CommentType) => void;
  canReply: boolean;
}

export default function Comment({ comment, onAddReply, canReply }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);

  const handleAddReply = (content: string) => {
    const newReply: CommentType = {
      id: `c${Date.now()}`,
      content,
      author: {
        id: 'current-user',
        name: 'Current User',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      },
      createdAt: new Date().toISOString(),
      parentId: comment.id,
    };
    onAddReply(newReply);
    setIsReplying(false);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="author-avatar"
        />
        <div className="author-info">
          <h3 className="author-name">{comment.author.name}</h3>
          <time className="post-date">
            {new Date(comment.createdAt).toLocaleDateString()}
          </time>
        </div>
      </div>
      
      <p className="comment-content">{comment.content}</p>
      
      {canReply && (
        <div className="comment-actions">
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="button-icon"
          >
            <Reply className="w-4 h-4" />
            <span>Reply</span>
          </button>
          
          {isReplying && (
            <div className="comments-section">
              <CommentForm onSubmit={handleAddReply} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}