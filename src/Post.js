import React from 'react';
import propTypes from 'prop-types';
import PostHeader from './PostHeader';

// Props (properties) -> Propriedades

// existem 3 principais formas: short circuit evaluation, operação ternária e um if fora da renderização

export default function Post(props) {

  // if(props.post.read) {
  //   return <h2>{props.post.title} já foi lido</h2>
  // }

  return(
    <>
    <article>
      <PostHeader onRemove={props.onRemove} post={{
        id: props.post.id,
        read: props.post.read,
        title: props.post.title,
      }}/>
      <br />
      <small>{props.post.subtitle}</small>
      <br />

      Media: {props.post.likes}
    </article>
    <br />
    </>
  );
}

Post.propTypes = {
  onRemove: propTypes.func.isRequired,
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    likes: propTypes.number.isRequired,
    subtitle: propTypes.string.isRequired,
    read: propTypes.bool.isRequired
  }).isRequired,
}