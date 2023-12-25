import React from 'react'

const Experiences = () => {
  const experiences = [
    {
      position: 'Software Developer',
      organization: 'The Bubble Project',
      description: 'Bubble! Learn Science',
      timeline: '2023 - Present',
    },
    {
      position: 'Software Developer',
      organization: 'Michigan Hackers',
      description: 'M-Classes',
      timeline: '2023 - Present',
    },
    {
      position: 'Software Developer',
      organization: 'Chulalongkorn University',
      description: 'AICute Stroke Analysis',
      timeline: '2021',
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Experiences</h2>
        <div>
          {
            experiences.map((experience, index) => (
              <div key={index}>
                <span className="font-medium">{experience.position}</span> |
                <span className="italic"> {experience.organization}</span> |
                <span className="text-primary"> {experience.description}</span> |
                <span> {experience.timeline}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Experiences
