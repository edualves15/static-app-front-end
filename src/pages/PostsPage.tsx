import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  content: string;
};

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => setPosts(response.data.data))
      .catch(error => console.error('Erro ao buscar posts:', error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts && posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
};

export default PostsPage;
