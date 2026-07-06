import React from 'react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import Reveal from '../Reveal/Reveal'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id="projects" className="section projects">
      <Reveal>
        <h2 className="section__title">
          <span className="section__title-number">02.</span> Projects
        </h2>
      </Reveal>

      <div className="projects__list">
        {projects.map((project, index) => (
          <Reveal key={project.name}>
            <ProjectContainer project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
