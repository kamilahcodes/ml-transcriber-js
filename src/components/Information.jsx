import React from 'react'

export default function Information() {
  return (
    <main className='flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap 
        text-pink-400 bold'>Your Transcription</h1>

        <div className='grid grid-cols-1 sm:mx-auto bg-white  rounded overflow-hidden items-center p-1 pinkShadow border-[2px] border-solid border-pink-300'>
            <button>
                Transctiption
            </button>


        </div>
  
  </main>
  )
}
