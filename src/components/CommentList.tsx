import React from 'react';
import { Comment as CommentType } from '../types';
import Comment from './Comment';

interface CommentListProps {
  comments: CommentType[];
  onAddReply: (comments: CommentType[]) => void;
  parentId?: string | null;
  depth?: number;
}

export default function CommentList({ 
  comments, 
  onAddReply, 
  parentId = null, 
  depth = 0 
}: CommentListProps) {
  const maxDepth = 3;
  
  const filteredComments = comments.filter(
    comment => comment.parentId === parentId
  );

  return (
    <div className={parentId ? 'nested-comments' : ''}>
      {filteredComments.map(comment => (
        <div key={comment.id}>
          <Comment
            comment={comment}
            onAddReply={(newReply) => {
              const updatedComments = [...comments, newReply];
              onAddReply(updatedComments);
            }}
            canReply={depth < maxDepth}
          />
          {comments.some(c => c.parentId === comment.id) && (
            <CommentList
              comments={comments}
              onAddReply={onAddReply}
              parentId={comment.id}
              depth={depth + 1}
            />
          )}
        </div>
      ))}
    </div>
  );
}