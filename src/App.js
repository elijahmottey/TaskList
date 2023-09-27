
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Task';
import Task from './data/Task';
import AddTask from './components/addTask'






function App() {
  const userName = "Elijah Mottey"
  
  //usestate
  const [tasksData,setTasksData]=useState(Task)


  if (tasksData ==='' || tasksData.length===0){
    return(

      <>
       <Header userName={userName} />
      <button type='submit'>Add task</button>
      <h1>No data</h1></>
     
    )
  }
  return (
    <>
    <Header userName={userName} />

    <AddTask />
    
    <Tasks tasksData={tasksData} />
    

    
    </>
    
  );
}

export default App;
