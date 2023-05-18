import { useState } from 'react';
import Task from './Task';
import Input from './Input';

function AddTask({ tasks = [], setTasks = () => {} }) {
  const [task, setTask] = useState({ title: '' }); // Initialize task with an empty title
  const [inputError, setInputError] = useState('');
  const [isInputValid, setInputValid] = useState(true);
  const [editedTask, setEditedTask] = useState(null); // Add the editedTask state

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.title.trim() === '') {
      setInputError('Please enter a task title.');
      setInputValid(false);
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: task.title.trim(),
      date: new Date().toDateString(),
    };

    setTasks([...tasks, newTask]);
    setTask({ title: '' }); // Reset the title after submitting
    setInputError('');
    setInputValid(true);
  };

  const handleInputChange = (event) => {
    setTask({ ...task, title: event.target.value });
    setInputError('');
    setInputValid(true);
  };

  return (
    <div className="container">
      <h2>Todo-List</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <Input
            type="text"
            className={`result ${isInputValid ? '' : 'error'}`}
            value={task.title}
            onChange={handleInputChange}
          />
          <input type="submit" value="SAVE" />
          {isInputValid ? null : <p className="error-message">{inputError}</p>}
        </div>
      </form>
      {/* Render the Task component outside the form */}
      <Task tasks={tasks} setTasks={setTasks} editedTask={editedTask} setEditedTask={setEditedTask} />
    </div>
  );
}

export default AddTask;




