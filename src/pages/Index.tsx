import React from 'react'
import { Link } from 'react-router-dom'

export const Index: React.FC = () => {
  return (
    <>
      <h1>Let's Study!</h1>
      <p>
        <Link to="/effect">useEffectを学ぶ</Link>
      </p>
    </>
  )
}
