import React, {useState} from 'react';
import Header from './Header';
import Post from './Post';
import { ThemeProvider } from './ThemeContext';

// render -> Renderizar (mostrar algo em tela)

function App() {

  // useState é um array de duas posições [valor, setDoValor]
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title #01', subtitle: 'Sub #01', likes: 20, read: false},
    { id: Math.random(), title: 'Title #02', subtitle: 'Sub #02', likes: 10, read: true},
    { id: Math.random(), title: 'Title #03', subtitle: 'Sub #03', likes: 50, read: false},
  ]);


  function handleRefresh() {

    // pegar o valor de prevState é uma boa prática para evitar problemas (caso dependa do valor anterior)
     setPosts(prevState => [...prevState , {
      id: Math.random(),
      title: `Title#0${prevState.length + 1}`,
      subtitle: `Sub#0${prevState.length + 1}`,
      likes: 50,
      read: false,
     }]);

  }

  function handleRemovePost(postId) {
    setPosts(prevState => prevState.filter(
      item => item.id !== postId
    ))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

        <hr />
        {
          // transforma de um array de objetos para um array de elementos (interpretável pelo react)
          posts.map((post) => ( 
            <Post key={post.id} onRemove={handleRemovePost} post={post}/>
          ))
        }
        
    </ThemeProvider>
  );
}

export default App;