import React from 'react'

const Social = () => {
  const social = [
    {
      name: 'Github',
      link: 'https://github.com/temttae'
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/temtae',
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Social</h2>
        <div>
          {
            social.map((social, index) => (
              <div key={index}>
                <a href={social.link} target='_blank' className='text-primary underline italic'>
                  <span>{social.name}</span>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Social
