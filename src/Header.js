import propTypes from 'prop-types';
import React from 'react';

export default function Header({title, children}) {
  return(
    <>
    <h1>{title}</h1>

    {children}
    </>
  );
}

Header.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
}

Header.defaultProps = {
  title: 'JStack` blog',
}