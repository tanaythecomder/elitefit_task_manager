import React from 'react'
import Add from './Add'
import Modals from './Modals'

const Filter = ({ isOpen, onClose, priority, status, setPriority, setStatus }) => {


    return (

        <div>
            <Modals isOpen={isOpen}
                onClose={onClose}>
                <div className="gap-2 flex flex-col ">
                    <div className="flex flex-col">
                        <label htmlFor="priority"> Priority</label>
                        <select name="priority" as="select" className="h-10 border" value={priority} onChange={(e)=>setPriority(e.target.value)} >
                            <option value="">-Select-</option>
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                        </select>

                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="status"> Status</label>
                        <select name="status" as="select" className="h-10 border" value={status} onChange={(e)=>setStatus(e.target.value)} >
                            <option value="">-Select-</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>

                        </select>

                    </div>
                    <button className="self-end border bg-orange rounded px-3 py-1.5" onClick={onClose} >
                        Apply Filter
                    </button>
                </div>

                {/* <Add onClose={onClose} isUpdate={isUpdate} setTask={setTask} task={task} /> */}
            </Modals>
        </div>


    )
}

export default Filter