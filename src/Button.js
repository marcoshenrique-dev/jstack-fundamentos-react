import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

export default function Button(props) { 

  const {theme} = useContext(ThemeContext);

  return (
    <button onClick={props.onClick} style={{
      color: theme === 'dark' ? '#fff' : '#000',
      backgroundColor: theme === 'dark' ? '#000' : '#fff',
    }}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
}