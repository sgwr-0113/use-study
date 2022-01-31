import React from 'react'
import { Link } from 'react-router-dom'
import { RefFocus } from 'components/ref/RefFocus'
import { RefCompareState } from 'components/ref/RefCompareState'

export const Ref: React.FC = () => {
  return (
    <>
      <h1>useRef</h1>
      <h2>DOMを参照したい場合</h2>
      <RefFocus />
      <h2>値を裏で保持したい場合</h2>
      <RefCompareState />
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  )
}
