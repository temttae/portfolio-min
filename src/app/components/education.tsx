import React from 'react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelors',
      institution: 'University of Michigan',
      date: '2023 - Present',
    },
  ]
  
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Education</h2>
        <div>
          {
            education.map((degree, index) => (
              <div key={index}>
                <span className="font-medium">{degree.degree}</span> |
                <span> {degree.institution}</span> |
                <span> {degree.date}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Education
