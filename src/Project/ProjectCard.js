import React from 'react'

export default function ProjectCard({ project }) {
  const { title, info, src, stack, github, deploy } = project
  return (
    <div className="card-wrapper">
      <div className="card-front">
        <h3>{title}</h3>
        <h4>{info}</h4>
        <div className="card-image">
          <img alt="sample" src={src}></img>
        </div>
      </div>

      <div className="card-back">
        <h3>Stack</h3>
        <h4>{stack}</h4>

        <div className="card-link-wrapper">
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <i className="fab fa-github" />
          </a>
          {deploy && (
            <a target="_blank" rel="noopener noreferrer" href={deploy}>
              <i className="fas fa-globe" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
