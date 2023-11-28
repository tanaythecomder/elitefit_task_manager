import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import Card from "./components/Card";
import useDisclouse from './hooks/useDisclouse'
import AddorUpdatecontact from './components/AddorUpdatecontact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nocontact from "./components/Nocontact";
import Filter from "./components/Filter";
import useDisclousefilter from "./hooks/useDislousefilter";
const App = () => {
  const [taskList, settaskList] = useState([]);
  const [ isOpen, onClose, onOpen ] = useDisclouse();
  const [ isOpenFilter, onCloseFilter, onOpenFilter] = useDisclousefilter();
  const [trackPriority, setPriority] = useState();
  const [trackStatus, setStatus] = useState();
  // const [searchquery, setSearchquery] = useState("");
  // const [searcheddata, setSearcheddata] = useState()

  // console.log(isOpen)


  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]")
    settaskList(taskList)
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    

    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    // console.log(taskList)

    // console.log(searchquery)
    const newtaskList = taskList.filter(task => {
      return( task.title.toLowerCase().includes(value.toLowerCase()) || task.description.toLowerCase().includes(value.toLowerCase()))

    })
    
    settaskList(newtaskList)



  }

  return (
    <>
      <div className="max-w-[500px] mx-auto ">
        <Nav />

        <div className="flex relative items-center">
          <BiSearchAlt className=" text-white text-4xl absolute ml-1.5" />
          <input
            type="text"
            placeholder="Search here"
            className="text-white text-2xl pl-11 flex-grow h-10 bg-transparent border-white border rounded-md "
            onChange={handleSearch}
          />
          <IoFilterSharp className="text-white cursor-pointer text-4xl ml-2" onClick={onOpenFilter}  />
          <AiOutlineUserAdd className="text-white cursor-pointer text-4xl ml-2" onClick={onOpen} />
        </div>
        {
          taskList.length == 0 ?
            <Nocontact />
            :
            <div className="flex flex-col mt-3 ">
              {taskList.map((doc) => {
                return (
                  <div key={doc.id} className="mt-2">
                    <Card task={doc} id={doc.id} setTask={settaskList} />
                  </div>
                );
              })}
            </div>
        }
        {
          console.log(trackStatus)
          
        }
        <AddorUpdatecontact isOpen={isOpen} onClose={onClose} isUpdate={false} setTask={settaskList} />
        <Filter isOpen = {isOpenFilter} onClose={onCloseFilter} priority = {trackPriority} status = {trackStatus} 
          setPriority = {setPriority} 
          setStatus = {setStatus}
           />

      </div>
      <ToastContainer />
    </>
  );
};

export default App;
