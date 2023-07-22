import propTypes from 'prop-types';
import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

export default function Header({title, children}) {
  const {onToogleTheme} = useContext(ThemeContext);

  return(
    <>
    <h1>{title}</h1>
    <Button onClick={onToogleTheme}>Mudar tema</Button>
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