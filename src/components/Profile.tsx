import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;

    li {
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0;
      }

      p {
        color: #fff;
        font-size: 1.6rem;
        line-height: 1.9;
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
