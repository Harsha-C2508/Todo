import './App.css';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <div className='Head'>
        <h1>Todo App</h1>
        <p>List all your pending works here and Complete it one by one</p>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
