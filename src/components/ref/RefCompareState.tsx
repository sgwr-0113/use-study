import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';

export const RefCompareState: React.FC = () => {
  const [stateCount, setStateCount] = useState<number>(0);
  const refCount = useRef<number>(0);

  const incrementState = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRef = () => {
    refCount.current++;
    console.log('refCount:' + refCount.current);
  };

  return (
    <div className="description">
      <div className="description-left">
        <p className="description-left-p">
          必要な時だけ経過を表示したい時は、初期値を与えた上でcurrentプロパティを参照しましょう
        </p>
        <p className="description-left-p">
          初期値が文字列や数値の場合、refオブジェクトのcurrentプロパティは書き換え可能になります
        </p>
        <p className="description-left-p">
          useRefのカウントを増やしても数値は変わりませんが、stateが更新されると再レンダリングにより値が更新されます
        </p>
        <p className="description-left-p">
          このことから、currentプロパティの状態が更新されても、再レンダリングが起きないことがわかります
        </p>
        <p className="description-left-p">
          再レンダリングをせずに内部に保持している値だけを更新したい場合は、useStateではなくuseRefを利用するようにしましょう
        </p>
        <h3 className="description-left-h3">使いどころ</h3>
        <ul className="description-left-ul">
          <li>必要な時に経過時間を表示</li>
          <li>最後に累積正解数や戦績を表示</li>
        </ul>
      </div>
      <div className="description-right">
        <div className="description-right-container">
          <p className="description-left-p">useStateでカウント: {stateCount}</p>
          <Button variant="outlined" onClick={incrementState}>
            カウントを増やす
          </Button>
        </div>
        <div className="mt-8 sm:mt-16 description-right-container">
          <p className="description-left-p">useRefでカウント: {refCount.current}</p>
          <Button variant="outlined" onClick={incrementRef}>
            カウントを増やす
          </Button>
        </div>
      </div>
    </div>
  );
};
