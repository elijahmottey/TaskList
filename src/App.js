// App.js
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Task';
import Task from './data/Task';
import AddTask from './components/addTask'

const LOCAL_STORAGE_KEY ="taskApp.app"

function App() {
  const userName = "Elijah Mottey"

  

 
  // useState
  const [tasksData, setTasksData] = useState(Task)
  useEffect(() => {
    try {
      const storeTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storeTasks) {
        console.log("Setting local", storeTasks);
        setTasksData(storeTasks);
      }
    } catch (error) {
      console.error("Error loading tasks from local storage:", error);
    }
  }, []);
  

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(tasksData))
  },[tasksData])


  const handleAdd = (task) => {
     task.id = uuidv4()
     setTasksData([ ...tasksData, task])
  
  }

  const deleteTask=(id)=>{
    if(window.confirm("Are you sure you want to delete this task?")){
      setTasksData(tasksData.filter((item)=>item.id !== id))
    }
  }
  let countComplete =0;
  
      
  for(let i=0;i<tasksData.length ;i++){
    if(tasksData[i].completed===true){
      countComplete++
    }
      }

  return (
    <>
      <Header userName={userName} />
      <AddTask handleValue={handleAdd} /> {/* Change prop name to "handleValue" */}
      <Tasks tasksData={tasksData} handleDelete={deleteTask}  />
      <div>{countComplete} completed out of {tasksData.length}  </div>
    </>
  );
}

export default App;
