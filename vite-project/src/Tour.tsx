import React, { useState } from 'react'

const Tour = ({ id, title, body, userId }) => {
  
  return (
    <article>
    <span>{id}</span>
    <h4>{title}</h4>
    <p>{body}</p>

        

    </article >
  );
};

export default Tour
