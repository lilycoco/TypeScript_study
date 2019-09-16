import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = <Todo>(id, title, completed) => {
  console.log(id, title, completed)
};
