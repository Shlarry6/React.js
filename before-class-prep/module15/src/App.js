import React, { useEffect, useState, useCallback } from 'react';

import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = tasksObject => {
      const loadedTasks = [];
  
      for (const taskKey in tasksObject) {
        loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };

    fetchTasks({url: 'https://react-http-43548-default-rtdb.firebaseio.com/tasks.json'},
    transformTasks
  );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>

      <ForwardCounter />
      <BackwardCounter />

      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
