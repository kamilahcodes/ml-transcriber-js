import React from 'react'

export default function Header() {
  return (
    <div>
      <header className='flex items-center justify-between gap-4 p-4'> 
            <h1 className='font-medium text-pink-400 bold'>Transcriber</h1>
            <button className='flex items-center gap-2 specialBtn px-3 text-sm py-2 rounded-lg text-pink-400'>
              <p>New</p>
              <i className='fa-solid fa-plus'></i>
              
              </button>
          </header>
    </div>
  )
}
