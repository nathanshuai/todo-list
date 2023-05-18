import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Input from './Input';

function Task({ tasks = [], setTasks = () => {}, editedTask, setEditedTask }) {
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (editedTask) => {
    setEditedTask(editedTask);
  };
  
  return (
    <div className="grid">
      {tasks.map((task) => (
        <section key={task.id}>
          {editedTask && editedTask.id === task.id ? (
            <div>
              <Input
                value={editedTask.title}
                onChange={(event) =>
                  setEditedTask({ ...editedTask, title: event.target.value })
                }
              />
              <button onClick={() => handleEdit(null)}>Save</button>
            </div>
          ) : (
            <div>
              <h3>{task.title}</h3>
              <div className="options">
                <div className="date">
                  <p>{task.date}</p>
                </div>
                <div className="icons">
                  <FaPen
                    className="edit"
                    title="Edit task"
                    onClick={() => handleEdit(task)}
                  />
                  <FaTrash
                    className="delete"
                    title="Delete task"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default Task;






