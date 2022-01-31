import React, { useState, useRef } from 'react'

export const RefCompareState: React.FC = () => {
  const [stateCount, setStateCount] = useState<number>(0)
  const refCount = useRef<number>(0)

  const incrementState = () => {
    setStateCount((prevCount) => prevCount + 1)
  }

  const incrementRef = () => {
    refCount.current++
    console.log('refCount:' + refCount.current)
  }

  return (
    <>
      <p>
        ReactのuseRefフックの初期値にnullではない……つまり文字列や数値といった何かしらの値の場合は、refオブジェクトのcurrentプロパティは、書き換え可能な状態になります。
        また、useStateフックのように、stateやpropsの更新によってコンポーネントがマウントされても、currentプロパティの状態が保持されます。なお、currentプロパティの状態が更新されても、再レンダリングが起きません。
        letで宣言したように再代入可能ながら、useStateフックのように状態を保持できて、でも再レンダリングの対象とならない……という変わった仕様が特徴です。
      </p>
      <p>
        コンポーネントの再レンダリングはしたくないけど、内部に保持している値だけを更新したい場合は、保持したい値をuseStateではなく、useRefを利用するのが良さそうです。
      </p>
      <div>
        <p>useStateの「stateCount」: {stateCount}</p>
        <button onClick={incrementState}>カウントを増やす</button>
      </div>
      <div>
        <p>useRefの「refCount」: {refCount.current}</p>
        <button onClick={incrementRef}>カウントを増やす</button>
      </div>
    </>
  )
}
