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
  const [taskList, setTaskList] = useState([]);
  const [isOpen, onClose, onOpen] = useDisclouse();
  const [isOpenFilter, onCloseFilter, onOpenFilter] = useDisclousefilter();
  const [trackPriority, setPriority] = useState("");
  const [trackStatus, setStatus] = useState("");
  const [searchquery, setSearchquery] = useState("");
  // const [filterButton, setFilterButton] = useState(0);
  // const [searcheddata, setSearcheddata] = useState()

  // console.log(isOpen)


  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem("taskList") || "[]")
  //   console.log(data," usert")
  //   setTaskList(data)

  // },[]);

  useEffect(() => {
    handleSearch()
  }, [searchquery, trackPriority,trackStatus])

  const handleSearch = () => {




    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    // console.log(taskList)
    // console.log("1", searchquery);
    // console.log(trackPriority);
    // console.log(trackStatus);
    const newtaskList = taskList.filter(task => {
      return ((task.title.toLowerCase().includes(searchquery.toLowerCase()))
        && (trackPriority === "" ? true : task.prioritylevel === trackPriority) && (trackStatus === "" ? true : task.status === trackStatus)
      )

    })
    setTaskList(newtaskList);
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
            onChange={(e) => setSearchquery(e.target.value)}
          />
          <IoFilterSharp className="text-white cursor-pointer text-4xl ml-2" onClick={onOpenFilter} />
          <AiOutlineUserAdd className="text-white cursor-pointer text-4xl ml-2" onClick={onOpen} />
        </div>
        {console.log(taskList.length + "taslList")}
        {

          taskList.length === 0 ?
            trackStatus || searchquery || trackPriority ? <Nocontact text={"No result found"} /> : <Nocontact text={"No tasks"} />
            :
            <div>

              <div className="">
                <hr className=" mt-10 f" />
                <div className="font-bold text-white">Upcoming Tasks</div>

              </div>

              <div className="flex flex-col mt-3">
                {taskList
                  .filter((doc) => new Date(doc.duedate) > new Date() && doc.status === 'pending')
                  .map((filteredTask) => (
                    <div key={filteredTask.id} className="mt-2">
                      <Card task={filteredTask} id={filteredTask.id} setTask={setTaskList} />
                    </div>
                  ))}
              </div>
              <div className="">
                <hr className=" mt-10 f" />
                <div className="font-bold text-white">Completed</div>

              </div>

              <div className="flex flex-col mt-3">
                {taskList
                  .filter((doc) => doc.status === 'completed')
                  .map((filteredTask) => (
                    <div key={filteredTask.id} className="mt-2">
                      <Card task={filteredTask} id={filteredTask.id} setTask={setTaskList} />
                    </div>
                  ))}
              </div>
              <div className="">
                <hr className=" mt-10 f" />
                <div className="font-bold text-white">Overdue</div>

              </div>

              <div className="flex flex-col mt-3">
                {taskList
                  .filter((doc) => new Date(doc.duedate) <= new Date() && doc.status === 'pending')
                  .map((filteredTask) => (
                    <div key={filteredTask.id} className="mt-2">
                      <Card task={filteredTask} id={filteredTask.id} setTask={setTaskList} />
                    </div>
                  ))}
              </div>
            </div>
        }
        {
          console.log(trackStatus)}
        {console.log(trackPriority)}


        <AddorUpdatecontact isOpen={isOpen} onClose={onClose} isUpdate={false} setTask={setTaskList} />
        <Filter isOpen={isOpenFilter} onClose={onCloseFilter} priority={trackPriority} status={trackStatus}
          setPriority={setPriority}
          setStatus={setStatus}
        />

      </div>
      <ToastContainer />
    </>
  );
};

export default App;
