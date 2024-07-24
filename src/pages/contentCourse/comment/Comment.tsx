import React, { FC } from 'react';

interface CommentProps {
  text: string;
}



const Comment: FC<CommentProps> = ({text}) => {

// localStorage.setItem("comment" , JSON.stringify(text))

  
  



  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
