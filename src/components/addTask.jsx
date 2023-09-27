import { useState, useRef } from "react"


const AddTasks = ()=>{
    // use Ref
   const reference= useRef()

    const [addtask,setAddTask]=useState(

        <button>Add Task</button>
    )


    const useRefs= (e)=>{
        console.log(reference.current.value)
     }
    const inputText =()=>{
      
       setAddTask(
        <input type="text" ref={useRefs} />
       )
       
    }

    return(
       <p onClick={inputText}>{addtask}</p> 

    )
}
export default AddTasks