import React from 'react'

const Email = () => {
  return ( 
    <div className='w-full  p-10 '>
        <h1 className='text-center p-2 italic text-3xl font-semibold text-[#e88d67]' >What next..? Let's Talk..!</h1>
        <h1 className='text-center p-2 text-2xl font-semibold' >Get in Touch</h1>
        <div className=' flex justify-center items-center'><p className='text-center p-2' >I'm currently open to new job opportunities. Contact me if you are interested in having me on your team, working on your project, seeking mentorship, or just want to say hello. Please click the button below or send an email to tejasXXssndeXXXX@gmail.com.</p></div>
        <div className='flex items-center justify-center'><button className="border-1 rounded-xl font-semibold  p-2" type="button">Send a Message &nbsp;<span className='text-xl '> <i class="ri-message-2-line"> </i></span></button>
        </div>
    </div>
  )
}

export default Email