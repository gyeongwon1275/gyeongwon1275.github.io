import React, { useEffect } from 'react'
import './Main.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="main-text-container">
      <h1> 안녕하세요? 김경원입니다.</h1>
      <h3>
        React를 좋아하는 프론트엔드 개발자 김경원입니다.
        <br />
      </h3>

      <div className="social-icon-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/2FZhvPP"
        >
          <i className="fab fa-github" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/2FGyNl2"
        >
          <i className="fab fa-blogger-b" />
        </a>

        <div className="email-wrapper">
          <a href="mailto:rlaruddnjs28@gmail.com">
            <i className="far fa-envelope" />{' '}
          </a>{' '}
          <p>{'rlaruddnjs28@gmail.com'}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
