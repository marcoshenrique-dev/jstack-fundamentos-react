import React from 'react';

// Props (properties) -> Propriedades

export default function Post(props) {
  return(
    <>
    <article>
      <strong>{props.post.title}</strong> <br />
      <small>{props.post.subtitle}</small>
    </article>
    <br />
    </>
  );
}

