import React from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  line-height: 1.9;
  ${sp`
    font-size: 1.4rem;
  `}

  ul {
    width: 90%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;

    ${tab`
      width: 100%;
    `}
    ${sp`
      width: 100%;
    `}

    li {
      margin-bottom: 2rem;
      ${sp`
        margin-bottom: 1.2rem;
      `}
      &:last-child {
        margin-bottom: 0;
      }

      p {
        color: #fff;
        margin: 0;
        word-break: break-word; /* TODO: word-breakをやめたい */
        overflow-wrap: break-word;
        word-wrap: break-word;

        span {
          padding-right: 1rem;
          font-weight: bold;
          white-space: nowrap;
        }
      }
    }
  }
`

const Profile = () => {
  return (
    <StyledContainer>
      <ul>
        <li><p><span>生年月日:</span>2000/12/18</p></li>
        <li><p><span>趣味:</span>バンド</p></li>
        <li><p><span>特技:</span>ドラム(歴6年)</p></li>
        <li><p><span>ひとこと:</span>ITのモノづくりが好きです。アプリ, ゲーム, クリエイティブコーディング等なんでも興味あります。</p></li>
        <li><p><span>スキル:</span>HTML/CSS/JavaScript/TypeScript/Node/React/Ruby/Rails/Python/Processing/Docker/AWS</p></li>
      </ul>
    </StyledContainer>
  )
}

export default Profile
