import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Post as PostType, Comment } from '../types';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [isCommenting, setIsCommenting] = useState(false);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: `c${Date.now()}`,
      content,
      author: {
        id: 'current-user',
        name: 'Current User',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      },
      createdAt: new Date().toISOString(),
      parentId: null,
    };
    setComments([...comments, newComment]);
    setIsCommenting(false);
  };

  return (
    <article className="card post">
      <div className="post-header">
        <div className="post-author">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="author-avatar"
          />
          <div className="author-info">
            <h2 className="author-name">{post.author.name}</h2>
            <time className="post-date">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
      
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      
      <div className="post-actions">
        <button
          onClick={() => setIsCommenting(!isCommenting)}
          className="button-icon"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Comment</span>
        </button>
        
        {isCommenting && (
          <div className="comments-section">
            <CommentForm onSubmit={handleAddComment} />
          </div>
        )}
        
        <div className="comments-section">
          <CommentList comments={comments} onAddReply={setComments} />
        </div>
      </div>
    </article>
  );
}