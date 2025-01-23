export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  parentId: string | null;
  replies?: Comment[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  comments: Comment[];
}