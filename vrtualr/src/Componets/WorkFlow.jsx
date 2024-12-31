import React from 'react'
import { CheckCheckIcon } from 'lucide-react'

function WorkFlow() {
  return (
    <div className="mt-20" >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>

        <div className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
                <img src="/src/assets/code.jpg" alt="code img " />
            </div>
            <div className=''>

            </div>
        </div>
      </h2>
    </div>
  )
}

export default WorkFlow