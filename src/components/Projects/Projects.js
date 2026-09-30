import React from 'react'
import { projects } from '../../portfolio'
import FeaturedProject from '../FeaturedProject/FeaturedProject'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import Reveal from '../Reveal/Reveal'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  const featured = projects.filter((project) => project.featured && project.image)
  const rest = projects.filter((project) => !featured.includes(project))

  return (
    <section id="projects" className="section projects">
      <Reveal>
        <h2 className="section__title">
          Projects
        </h2>
      </Reveal>

      {featured.length > 0 && (
        <div className="projects__featured">
          {featured.map((project, index) => (
            <Reveal key={project.name}>
              <FeaturedProject project={project} eager={index < 2} />
            </Reveal>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="projects__more">
          <Reveal>
            <h3 className="subsection__title">More projects</h3>
          </Reveal>

          <div className="projects__list">
            {rest.map((project, index) => (
              <Reveal key={project.name}>
                <ProjectContainer project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
