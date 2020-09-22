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
        사용자에게 도움이 되는 서비스를 만드는 개발자가 되고자 합니다.
        <br />
        팀원들을 배려하고 말보다 코드와 글로 소통하여 협업하는 개발자입니다.{' '}
      </h3>

      <div className="social-icon-container">
        {/* <a target="_blank" href="https://www.facebook.com/bemypetkr"> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/2FZhvPP"
        >
          <i class="fab fa-github" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bit.ly/2FGyNl2"
        >
          <i class="fab fa-blogger-b" />
        </a>
      </div>
    </div>
  )
}

export default Main
