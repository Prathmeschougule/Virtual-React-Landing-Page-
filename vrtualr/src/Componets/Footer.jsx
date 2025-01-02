import React from 'react'
import{resourcesLinks,platformLinks,communityLinks} from '../Constant/index'

function Footer() {
  return (
      <footer  className='flex  mt-20 border-t border-neutral-700 py-10 '>
          <div className='  grid grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className=''>
                  <h3 className='mb-4 font-semibold text-md'>Resource</h3>
                  <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                      <li key={index} className=''>
                         <a className='text-neutral-400 hover:text-white' href= {link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className=''>
                  <h1 className='mb-4 font-semibold text-md'>Platform</h1>
                  <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                      <li key={index} className=''>
                         <a className='text-neutral-400 hover:text-white' href= {link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className=''>
                  <h1 className='mb-4 font-semibold text-md'>Community</h1>
                  <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                      <li key={index} className=''>
                         <a className='text-neutral-400 hover:text-white' href= {link.href}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </footer>
  )
}

export default Footer