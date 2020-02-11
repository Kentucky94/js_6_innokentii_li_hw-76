import React from 'react';
import './MessageBlock.css';

const MessageBlock = props => {
  return (
    <div className='MessageBlock'>
      <h3>{props.author}</h3>
      <p>{props.message}</p>
    </div>
  );
};

export default MessageBlock;