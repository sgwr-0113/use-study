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

  const memorizedResult: number = useMemo(() => heavyFunc(countB), [countB]);
  const result: number = heavyFunc(countB);

  return (
    <>
      <div className={isUseMemo ? 'description-right-container' : 'mt-8 sm:mt-16 description-right-container'}>
        <h3 className="description-right-container-h3">useMemo{!isUseMemo && '非'}使用</h3>
        <p className="py-1 text-xl"> 再描画: {countA}回目</p>
        <p className="py-1 text-xl">計算結果: {isUseMemo ? memorizedResult : result}</p>
        <p className="attention-red">計算は{isUseMemo ? countB : countA + countB}回目</p>
        <div className="p-4">
          <Button variant="outlined" onClick={() => setCountA(countA + 1)}>
            描画する
          </Button>
          <Button variant="contained" onClick={() => setCountB(countB + 1)} sx={{ marginLeft: '8px' }}>
            重い計算
          </Button>
        </div>
      </div>
    </>
  );
};

export const MemoResult: React.FC = () => {
  return (
    <>
      <div className="description">
        <div className="description-left">
          <p className="description-left-p">
            頻繁に結果が変わらない関数の戻り値はuseMemoでメモ化し、値を再利用しましょう
          </p>
          <p>useCallbackは関数自体をメモ化しますが、useMemoは関数の結果をメモ化します</p>
          <p className="description-left-p">
            ただ、厳密に突き詰めるとキリがなく開発効率が落ちるため、自分の中でルールを設けた方が良さそうです
          </p>
          <h3 className="description-left-h3">使いどころ</h3>
          <ul className="description-left-ul">
            <li>React.memo化したコンポーネントに渡すオブジェクト</li>
            <li>コンポーネントに渡すstyle</li>
          </ul>
        </div>
        <div className="description-right">
          <Field isUseMemo={true} />
          <Field isUseMemo={false} />
        </div>
      </div>
    </>
  );
};
