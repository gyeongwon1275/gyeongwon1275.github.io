import React from 'react'
import './Educations.scss'
function Educations() {
  return (
    <div className="education-container">
      <h2>교육</h2>
      <div className="education-wrapper">
        <div className="date-wrapper">
          <h4>{`2020.03~2020.08`}</h4>
        </div>
        <div className="education-info-wrapper">
          <h3>{`코드스테이츠 (Code States)`}</h3>
          <h4>{`Advance software engineering, Immersive program (20기)`}</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/Code-States-Immersive-Course-16-a78e1e11032947bbbdc423c4729529c0"
          >
            {`코드스테이츠 커리큘럼`}
          </a>
        </div>
      </div>
      <div className="education-wrapper">
        <div className="date-wrapper">
          <h4>{`2012.02~2018.02`}</h4>
        </div>
        <div className="education-info-wrapper">
          <h3>{` 항공대학교`}</h3>
          <h4>{` 기계공학 학사 졸`}</h4>
        </div>
      </div>
    </div>
  )
}

export default Educations
