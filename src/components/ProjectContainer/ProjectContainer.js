import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const { name, subtitle, description, stack, sourceCode, livePreview } = project

  return (
    <div className="project-container">
      <div className="project-content">
        <h3 className="project-title">{name}</h3>
        {subtitle && <h4 className="project-subtitle">{subtitle}</h4>}

        <p className="project-description">{description}</p>

        {stack && (
          <ul className="project-stack">
            {stack.map((tech) => (
              <li key={uniqid()} className="project-stack-item">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {sourceCode && (
            <a
              href={sourceCode}
              aria-label="GitHub"
              className="link link--icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          )}

          {livePreview && (
            <a
              href={livePreview}
              aria-label="Live Preview"
              className="link link--icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
