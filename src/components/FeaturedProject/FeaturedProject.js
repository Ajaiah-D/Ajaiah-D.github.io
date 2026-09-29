import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './FeaturedProject.css'

const FeaturedProject = ({ project, index }) => {
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
  const imageStyle = imagePosition ? { objectPosition: imagePosition } : undefined
  const primaryLink = livePreview || sourceCode

  const media = (
    <div className="featured__media">
      {primaryLink ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
        >
          <img
            src={image}
            alt={imageAlt || `${name} screenshot`}
            className="featured__image"
            style={imageStyle}
            loading="lazy"
            decoding="async"
          />
        </a>
      ) : (
        <img
          src={image}
          alt={imageAlt || `${name} screenshot`}
          className="featured__image"
          style={imageStyle}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )

  const body = (
    <div className="featured__body">
      <p className="featured__eyebrow">
        Featured project
        {livePreview && <span className="featured__live">Live</span>}
      </p>

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
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  )

  return (
    <article
      className={`featured ${index % 2 === 1 ? 'featured--reverse' : ''}`.trim()}
    >
      {media}
      {body}
    </article>
  )
}

export default FeaturedProject
