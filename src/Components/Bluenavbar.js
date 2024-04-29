import React from 'react'

const Bluenavbar = () => {
    let Links =[
        {name:'SEBI Approval', link:'/'},
        {name:'Sustainability', link:'/'},
        {name:'Careers', link:'/'},
    ]

  return (
    <div className='bg-blue-950 w-screen h-11'>
        <ul className='flex md:justify-end items-center justify-center pt-3 me-24'>
            {
                Links.map((link) => (
                    <li className='font-normal text-xs md:text-sm pl-5'>
                        <a href={link.link} className='text-white'>{link.name}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Bluenavbar
