import "./style/index.css";
import AddTask from './components/AddTask';
import { useState } from 'react';



function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <main>
      <div className="container">
      <AddTask 
         tasks={tasks}
         setTasks={setTasks}
       />
      </div>
    </main>
  );
}

export default App;
