import React from 'react'
import './Project.scss'

function Project() {
  return (
    <div className="project-container">
      <h2>프로젝트</h2>
      <div className="project-wrapper">
        <div className="project-description-wrapper">
          <h3>Otjang</h3>
          <h4>
            [ 의류관리 App ] 옷장처럼 옷에 대한 정보들을 저장해서 관리하는 App
            입니다.
          </h4>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bit.ly/3hMoxEE"
          >
            <i className="fab fa-github" />
          </a>
          <h4>
            {
              'Stack : react-native / redux / redux-thunk / aws-sdk / react-navigation / react-hooks / victory-native'
            }
          </h4>
          <ul>
            <li>{'1. 옷 데이터 CRUD 기능, UI 구현'}</li>
            <li>{'2. Redux 설계 및 기능구현, Redux-thunk 로 서버와 연결'}</li>
            <li>{'3. 이미지 picker, aws-sdk 사용한 이미지 upload 기능'}</li>
            <li>{'4. 통계화면 구성 및 기능 구현 '}</li>
            <li>{'5. 홈화면, 의류 추가화면 구성 '}</li>
          </ul>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="project-description-wrapper">
          <h3>Pet-calculator </h3>
          <h4>
            [반려동물 건강계산기] Bemypet 의 반려동물 건강관련 계산기 Clone
          </h4>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bit.ly/2ZZVQhk"
          >
            <i className="fab fa-github" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bit.ly/33R05wL"
          >
            <i className="fas fa-globe" />
          </a>

          <h4>
            {
              'Stack : typescript / react / react-hooks / redux / Sass / webpack / chart.js'
            }
          </h4>
          <ul>
            <li>{'1. 계산기 UI 구현 '}</li>
            <li>{'2. redux 사용한 계산기 입력데이터처리 구현'}</li>
            <li>{'3. 사료 영양소 그래프 기능 구현'}</li>
            <li>{'4. 반응형 디자인 적용'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
