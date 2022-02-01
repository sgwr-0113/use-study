import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';

export const RefCompareState: React.FC = () => {
  const [stateCount, setStateCount] = useState<number>(0);
  const refCount = useRef<number>(0);

  const incrementState = () => {
    setStateCount((prevCount) => prevCount + 1);
  };

  const incrementRef = () => {
    refCount.current++;
    console.log('refCount:' + refCount.current);
  };

  return (
    <div className="flex">
      <div className="p-8 w-1/2 leading-relaxed">
        <p className="mb-2">
          初期値がnullではなく文字列や数値の場合、refオブジェクトのcurrentプロパティは書き換え可能になります。
        </p>
        <p className="mb-2">
          useRefのカウントを増やしても数値は変わりませんが、useStateのカウントを増やすと、再レンダリングにより値が更新されます。
        </p>
        <p>このことから、currentプロパティの状態が更新されても、再レンダリングが起きないことがわかります。</p>
        <p className="mb-2">
          再レンダリングをせずに内部に保持している値だけを更新したい場合は、useStateではなくuseRefを利用するようにしましょう。
        </p>
      </div>
      <div className="flex flex-col items-center p-8 w-1/2">
        <div className="container p-8">
          <p className="mb-2">useStateの「stateCount」: {stateCount}</p>
          <Button variant="outlined" onClick={incrementState}>
            カウントを増やす
          </Button>
        </div>
        <div className="container p-8">
          <p className="mb-2">useRefの「refCount」: {refCount.current}</p>
          <Button variant="outlined" onClick={incrementRef}>
            カウントを増やす
          </Button>
        </div>
      </div>
    </div>
  );
};
