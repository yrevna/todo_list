import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  const filterButton = props.filter.map((filter) => (
    <FilterButton id={filter.id} name={filter.name} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TODO List </h1>
      <Form />
      <div className="filters btn-group stack-exception">
        {filterButton}
      </div>
      <h2 id="list-heading">Tasks left: 3</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
