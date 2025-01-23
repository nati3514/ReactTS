import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with TypeScript and React',
    content: 'TypeScript has become an essential tool in modern React development. Here are some tips to get started...',
    author: {
      id: 'user1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    createdAt: '2024-03-10T10:00:00Z',
    comments: [
      {
        id: 'c1',
        content: 'Great post! TypeScript has really improved my development experience.',
        author: {
          id: 'user2',
          name: 'Alex Kim',
          avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
        },
        createdAt: '2024-03-10T10:30:00Z',
        parentId: null,
        replies: [
          {
            id: 'c2',
            content: 'Agreed! The type safety is a game changer.',
            author: {
              id: 'user3',
              name: 'Maria Garcia',
              avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
            },
            createdAt: '2024-03-10T11:00:00Z',
            parentId: 'c1',
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Building Accessible Web Applications',
    content: 'Accessibility should be a priority in web development. Here\'s how we can make our apps more inclusive...',
    author: {
      id: 'user4',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    createdAt: '2024-03-09T15:00:00Z',
    comments: [
      {
        id: 'c3',
        content: 'This is so important! Thanks for raising awareness.',
        author: {
          id: 'user5',
          name: 'Emma Thompson',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        },
        createdAt: '2024-03-09T16:00:00Z',
        parentId: null,
      }
    ]
  }
];