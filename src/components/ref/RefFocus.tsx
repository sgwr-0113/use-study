import React, { useRef } from 'react'

export const RefFocus: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputEl.current?.focus()
    console.log('inputEl.current:', inputEl.current)
    //inputEl.current: <input type="text">
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  )
}
