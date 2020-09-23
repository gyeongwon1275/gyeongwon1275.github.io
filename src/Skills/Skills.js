import React from 'react'
import './Skills.scss'
import { imageAddress } from '../Utils'
function Skills() {
  return (
    <div className="skills-container">
      <h2>스킬</h2>
      <div className="skills-wrapper">
        <h3>{'프로그래밍 언어'}</h3>
        <img alt="javascript" src={imageAddress.javascript} />
        <img alt="typescript" src={imageAddress.typescript} />
        <img alt="java" src={imageAddress.java} />
      </div>
      <div className="skills-wrapper">
        <h3>{'프레임워크 & 라이브러리'}</h3>
        <img alt="react" src={imageAddress.react} />
        <img alt="redux" src={imageAddress.redux} />
        <img alt="reactNative" src={imageAddress.reactNative} />
        <img alt="sass" src={imageAddress.sass} />
      </div>
    </div>
  )
}

export default Skills
