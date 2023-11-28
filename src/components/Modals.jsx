import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";


const Modals = ({isOpen, onClose,children}) => {
  
 
  return createPortal(
    <div>
      {isOpen ? (
        <>
          <div className="backdrop-blur absolute top-0 h-screen w-screen grid place-items-center">
            <div className="min-h-[200px] min-w-[300px] bg-white rounded p-2  ">

              <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-1.5xl cursor-pointer justify-end"
                
              />
              </div>
              
              {children}
              
              
            </div>
          </div>
          {/* <div className='backdrop-blur absolute top-0 h-screen w-screen '/> */}
        </>
      ) : null}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modals;
