import React from 'react'
import Add from './Add'
import Modals from './Modals'

const AddorUpdatecontact = ({isOpen, onClose,isUpdate, setTask,task}) => {

   
  return (
    <div>
        <Modals isOpen={isOpen}
                onClose={onClose}>
                  <Add onClose = {onClose} isUpdate = {isUpdate} setTask={setTask} task = {task}/>
        </Modals>
    </div>
  )
}

export default AddorUpdatecontact