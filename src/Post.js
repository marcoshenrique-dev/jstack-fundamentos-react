import React from 'react';
import propTypes from 'prop-types';

// Props (properties) -> Propriedades

export default function Post(props) {
  return(
    <>
    <article>
      <strong>{props.post.title}</strong> <br />
      <small>{props.post.subtitle}</small>

      <br />

      Media: {props.likes / 2}
    </article>
    <br />
    </>
  );
}

Post.propTypes = {
  likes: propTypes.number.isRequired,
  post: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string
  }).isRequired,
}