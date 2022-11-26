import React from 'react';
import Post from './Post';

// render -> Renderizar (mostrar algo em tela)

function App() {
  return (
    <>
    <h1>JStack's Blog</h1>
    <h2>Posts da semana</h2>

    <hr />

    <Post 
    post={{title: 'Titulo da notícia 01', subtitle: 'Subtitulo da notícia 01'}}/>
    <Post post={{title: 'Titulo da notícia 02', subtitle: 'Subtitulo da notícia 02'}}/>
    <Post post={{title: 'Titulo da notícia 03', subtitle: 'Subtitulo da notícia 03'}}/>
    
    </>
  );
}

export default App;