import React, { useState } from 'react';
import CommentList from './ListComments';
import AddComment from './AddComments';

const App: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = (comment: string) => {
    setComments([...comments, comment]);
  };



  

  return (
    <>
      <CommentList comments={comments} />
      <AddComment onAddComment={handleAddComment} />
    </>
  );
};

export default App;
