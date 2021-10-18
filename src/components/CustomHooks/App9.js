import React, { useEffect, useState } from "react";
import BackwardCounter from "./BackwardCounter";
import ForwardCounter from "./ForwardCounter";
import useHttp from "./MoreRealisticExample/hooks/use-http";
import NewTask from "./MoreRealisticExample/NewTask/NewTask";
import Tasks from "./MoreRealisticExample/Tasks/Tasks";

function App9() {
  const [tasks, setTasks] = useState([]);

  

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (takssObj) => {
      const loadedTasks = [];
  
      for (const taskKey in takssObj) {
        loadedTasks.push({ id: taskKey, text: takssObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-tutorial-2b442-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, []);

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

export default App9;
