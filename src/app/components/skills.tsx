import React from 'react'

const Skills = () => {
  const programmingLanguages = [
    {
      name: 'C++'
    },
    {
      name: 'Java'
    },
    {
      name: 'Python'
    },
    {
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
  ]
  const frameworks = [
    {
      name: 'React'
    },
  ]
  const tools = [
    {
      name: 'Git/Github'
    },
    {
      name: 'VSCode'
    },
    {
      name: 'MongoDB'
    },
    {
      name: 'Figma'
    },
    {
      name: 'Tableau'
    },
  ]
  const languages = [
    {
      name: 'English',
      proficiency: 'Fluent'
    },
    {
      name: 'Thai',
      proficiency: 'Fluent'
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {
              programmingLanguages.map((language, index) => (
                <div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
                     aria-label={`Programming Language: ${language.name}`}>
                  {language.name}
                </div>
              ))
            }
          </div>
          <div className="flex flex-wrap gap-2">
            {
              frameworks.map((framework, index) => (
                <div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
                     aria-label={`Framework: ${framework.name}`}>
                  {framework.name}
                </div>
              ))
            }
          </div>
          <div className="flex flex-wrap gap-2">
            {
              tools.map((tool, index) => (
                <div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
                     aria-label={`Tool: ${tool.name}`}>
                  {tool.name}
                </div>
              ))
            }
          </div>
          <div className="flex flex-wrap gap-2">
            {
              languages.map((language, index) => (
                <div className="px-2 py-1 text-sm rounded-md text-primary bg-primary/10" 
                     aria-label={`Language: ${language.name}`}>
                  {language.name} ({language.proficiency})
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
