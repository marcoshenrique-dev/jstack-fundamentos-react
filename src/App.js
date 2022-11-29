import React from 'react';
import Header from './Header';
import Post from './Post';

// render -> Renderizar (mostrar algo em tela)

function App() {
  return (
    <>
  
   <Header>
    <h2>Posts da semana</h2>
   </Header>

    <hr />

    <Post likes={20} post={{title: 'Titulo da notícia 01', subtitle: 'Subtitulo da notícia 01'}}/>
    <Post likes={2} post={{title: 'Titulo da notícia 02', subtitle: 'Subtitulo da notícia 02'}}/>
    <Post likes={5} post={{title: 'Titulo da notícia 03', subtitle: 'Subtitulo da notícia 03'}}/>
    
    </>
  );
}

export default App;