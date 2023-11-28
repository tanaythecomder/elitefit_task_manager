import React from 'react'

const Nocontact = ({text}) => {
  return (
    
        <div className='flex items-center justify-center h-screen'>
            <div className='flex text-3xl gap-3'>

            {/* <img src="/CONTACT.png" alt="" /> */}
            <div className='text-white pt-3 text-bold'>
            {text}
            </div>
            
            </div>
        </div>
    
  )
}

export default Nocontact