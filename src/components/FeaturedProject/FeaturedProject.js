import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './FeaturedProject.css'

const FeaturedProject = ({ project, eager = false }) => {
  const {
    name,
    description,
    stack,
    sourceCode,
    livePreview,
    image,
    imageAlt,
    imagePosition,
  } = project
  const primaryLink = livePreview || sourceCode
  const imageStyle = imagePosition ? { objectPosition: imagePosition } : undefined

  const img = (
    <img
      src={image}
      alt={imageAlt || `${name} screenshot`}
      className="featured__image"
      style={imageStyle}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )

  return (
    <article className="featured">
      <div className="featured__media">
        {primaryLink ? (
          <a href={primaryLink} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            {img}
          </a>
        ) : (
          img
        )}
      </div>

      <div className="featured__body">
        <h3 className="featured__title">
          {primaryLink ? (
            <a href={primaryLink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>

        <p className="featured__description">{description}</p>

        {stack && (
          <ul className="featured__stack">
            {stack.map((tech) => (
              <li key={tech} className="featured__stack-item">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="featured__links">
          {sourceCode && (
            <a
              href={sourceCode}
              aria-label={`${name} source code on GitHub`}
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
              aria-label={`${name} live demo`}
              className="featured__demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
