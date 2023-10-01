import './App.css';
import NumberList from './NumberList';

function App() {

  const todos = [
    {id: 1, name: "Wake up", isDone: true},
    {id: 2, name: "Practice React", isDone: false},
    {id: 3, name: "Eat", isDone: false},
    {id: 4, name: "Sleep", isDone: true}
  ]
  return (
    <div>
      <NumberList numbers={[1,2,2,3,4,4,5,6]}/>

      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.name} - {todo.isDone ? "Done" : null}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
