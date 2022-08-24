import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAllTodos } from './components/services/actions/todosAction';


function App() {

  const {isLoading, todos, error} = useSelector((state)=>state)
const dispatch =useDispatch()

useEffect(()=>{
  dispatch(getAllTodos())
},[])
  return (
    <div className="App">
     <h1>react redux tutorial</h1>
     <h1>Todos App</h1>
     {isLoading && <h3>Loading......</h3>}
     {error && <h3>{error.message}</h3>}


     <section>
      {todos && todos.map((todo)=>{
        return <article key={todo.id}>
          <h4>{todo.id}</h4>
          <h4>Title: {todo.title}</h4>
        </article>
      })}
     </section>
    </div>
  );
}

export default App;




// step 1  L: install packages
// 2 constants define
// 3  async action creator
// 4 reducer
// 5 create store 
// 6 provide store
// 7 use store
// 8 adding store