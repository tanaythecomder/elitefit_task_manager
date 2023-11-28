import React, { useState } from 'react'
import { MdOutlineContacts, MdEditOff } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import useDisclouse from '../hooks/useDisclouse'
import AddorUpdatecontact from './AddorUpdatecontact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ task, id, setTask }) => {
  const  [isOpen ,onClose, onOpen ]= useDisclouse()
  const [completed, setCompleted] = useState(task.status !== "pending");

  const handleCheckboxChange = () => {
    let taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList = taskList.map(c=>c.id==task.id?(completed?{...c,status:"pending"}:{...c, status:"completed"}):c)
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log(taskList);
    
    setCompleted(!completed);
    setTask(taskList)
  };

  const deletetaskList = async () => {
    let taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList = taskList.map(c => c.id == id ? null : c).filter(c => c != null);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTask(taskList);
  }
  return (
    <>
      { }
      <div className={"h-[140px]  rounded-lg  flex items-center gap-1 justify-around p-1 " + (task.prioritylevel == 2 ? "bg-red-300" : task.prioritylevel == 1 ? "bg-amber-500" : "bg-green-300")}>
        <MdOutlineContacts className='text-4xl ml-1 text-orange' />
        <div className='flex-grow ml-2'>
          <h1 className=' text-lg '>{task.title}</h1>
          <p className='text-sm'> {task.description}</p>
          <p className='text-sm'>Due date: {task.duedate}</p>
          <p className='text-sm'> {task.prioritylevel}</p>
        </div>
        <div className='px-3 flex '>
          
          <p className='mx-3'>{!completed ? 'pending' : 'completed'}</p>
          <input
          className=''
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className='text-3xl mr-1 flex'>
          <MdEditOff onClick={onOpen} className='cursor-pointer' />
          <RiDeleteBinLine onClick={deletetaskList} className='text-orange cursor-pointer' />
        </div>
        <AddorUpdatecontact isOpen={isOpen} onClose={onClose} isUpdate={true} task={task} setTask={setTask} />

      </div>
    </>
  )
}

export default Card