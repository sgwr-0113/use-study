import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

interface CountProps {
  text: string;
  countState: number;
}

interface FieldProps {
  isUseCallback: boolean;
}

const Count: React.FC<CountProps> = (props) => {
  const { text, countState } = props;
  console.log('Count child component', text);
  return (
    <p>
      {text}:{countState}
    </p>
  );
};

export const Field: React.FC<FieldProps> = (props) => {
  const { isUseCallback } = props;
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementA = () => setCountA(countA + 1);
  const incrementB = () => setCountB(countB + 1);

  const callbackIncrementA = useCallback(() => setCountA(countA + 1), [countA]);
  const callbackIncrementB = useCallback(() => setCountB(countB + 1), [countB]);

  return (
    <>
      <Count text="A ボタン" countState={countA} />
      <Count text="B ボタン" countState={countB} />
      <Button variant="outlined" onClick={isUseCallback ? callbackIncrementA : incrementA}>
        Aボタン
      </Button>
      <Button variant="contained" onClick={isUseCallback ? callbackIncrementB : incrementB}>
        Bボタン
      </Button>
    </>
  );
};

export const CallbackCounter: React.FC = () => {
  return (
    <>
      <div className="description">
        <div className="description-left">
          <p className="description-left-p">頻繁に更新されるものの側にあるものはReact.memoでメモ化しましょう</p>
          <p className="description-left-p">
            <span className="hidden sm:inline">右</span>
            <span className="inline sm:hidden">下</span>の例ではカウントの表記がReact.memo化されています
          </p>
          <p className="description-left-p">
            React.memoが使用された方では、Aボタンクリック時にBボタンのカウント表記はレンダリングされません
          </p>
          <h3 className="description-left-h3">使いどころ</h3>
          <ul className="description-left-ul">
            <li>タイマー</li>
            <li>インクリメンタルサーチ</li>
          </ul>
        </div>
        <div className="description-right">
          <div className="description-right-container">
            <h3 className="description-right-container-h3">useCallback使用</h3>
            <Field isUseCallback={true} />
          </div>
          <div className="mt-8 sm:mt-16 description-right-container">
            <h3 className="description-right-container-h3">useCallback非使用</h3>
            <Field isUseCallback={false} />
          </div>
        </div>
      </div>
    </>
  );
};
