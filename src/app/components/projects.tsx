import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Parkinson’s Disease Stage Predictor',
      link: 'https://github.com/temttae/parkinsons_updrs_predictor',
      description: 'Machine Learning',
      status: 'Complete',
    },
    {
      name: 'CU Endo',
      link: '',
      description: 'Web Application',
      status: 'Complete',
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Projects</h2>
        <div>
          {
            projects.map((project, index) => (
              <div key={index}>
                <a href={project.link} target='_blank' className='text-primary underline italic'>
                  <span>{project.name}</span>
                </a> | {project.description} | <span className="italic">{project.status}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects
