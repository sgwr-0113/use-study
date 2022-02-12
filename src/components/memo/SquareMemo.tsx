import React, { useState, useMemo } from 'react';
import Button from '@mui/material/Button';
import { heavyFunc } from 'utils/heavyFunc';

interface FieldProps {
  isUseMemo: boolean;
}

const Field: React.FC<FieldProps> = (props) => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);
  const { isUseMemo } = props;

  const resultA = () => {
    return setCountA(countA + 1);
  };
  const resultB = () => {
    return setCountB(countB + 1);
  };

  const memorizedResult: number = useMemo(() => heavyFunc(countB), [countB]);
  const result: number = heavyFunc(countB);

  return (
    <>
      <div className="container p-4 md:p-8">
        <h3 className="mb-2">useMemo{!isUseMemo && '非'}使用表記</h3>
        <p className="py-1 text-xl"> 再描画: {countA}回目</p>
        <p className="py-1 text-xl">計算結果: {isUseMemo ? memorizedResult : result}</p>
        <p className="text-sm text-red-500">計算は{isUseMemo ? countB : countA + countB}回目</p>
        <div className="p-4">
          <Button variant="outlined" onClick={resultA}>
            描画する
          </Button>
          <Button variant="contained" onClick={resultB} sx={{ marginLeft: '8px' }}>
            重い計算
          </Button>
        </div>
      </div>
    </>
  );
};

export const SquareMemo = () => {
  return (
    <>
      <div className="md:flex">
        <div className="p-8 leading-relaxed md:w-1/2">
          <p className="mb-2">
            そんなにしょっちゅう結果が変わらない関数の戻り値はuseMemoでメモ化し、値を再利用しましょう
          </p>
          <p>useCallbackは関数自体をメモ化しますが、こちらは関数の結果をメモ化します</p>
          <p className="mb-2">
            ただ、厳密に突き詰めるとキリがない上、開発効率が落ちるため、ルールを設けるといいでしょう
          </p>
          <h3 className="py-4 text-xl">useMemoの使いどころ</h3>
          <ul className="list-disc list-inside">
            <li>React.memo化したコンポーネントに渡すオブジェクト</li>
            <li>コンポーネントに渡すstyle</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2">
          <Field isUseMemo={true} />
          <Field isUseMemo={false} />
        </div>
      </div>
    </>
  );
};
