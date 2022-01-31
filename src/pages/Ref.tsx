import React from 'react'
import { Link } from 'react-router-dom'
import { RefFocus } from 'components/ref/RefFocus'

export const Ref: React.FC = () => {
  return (
    <>
      <h1>useRef</h1>
      <RefFocus />
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  )
}
