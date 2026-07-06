import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, index }) => {
  const { name, subtitle, description, stack, sourceCode, livePreview, inProgress } = project
  const primaryLink = livePreview || sourceCode

  return (
    <article className="project">
      <span className="project__index">{String(index + 1).padStart(2, '0')}</span>

      <div className="project__body">
        <h3 className="project__title">
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
          {inProgress && <span className="project__badge">In Progress</span>}
        </h3>

        {subtitle && <h4 className="project__subtitle">{subtitle}</h4>}

        <p className="project__description">{description}</p>

        {stack && (
          <ul className="project__stack">
            {stack.map((tech) => (
              <li key={tech} className="project__stack-item">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="project__links">
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
    </article>
  )
}

export default ProjectContainer
