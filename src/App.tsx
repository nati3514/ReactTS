import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Post as PostType } from './types';
import { mockPosts } from './data/mockData';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

function App() {
  const [posts, setPosts] = useState<PostType[]>(mockPosts);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = (newPost: Omit<PostType, 'id' | 'comments'>) => {
    const post: PostType = {
      ...newPost,
      id: `p${Date.now()}`,
      comments: [],
    };
    setPosts([post, ...posts]);
    setIsCreating(false);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <MessageCircle className="logo-icon" />
              <h1 className="header-title">Community</h1>
            </div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="button button-primary"
            >
              New Post
            </button>
          </div>
        </div>
      </header>

      <main className="container main-content">
        {isCreating && <CreatePost onSubmit={handleCreatePost} />}
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;