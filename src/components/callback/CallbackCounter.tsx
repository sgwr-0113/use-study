import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';

interface CountProps {
  text: string;
  countState: number;
}

interface MemoButtonProps {
  value: string;
  handleClick: () => void;
}

interface FieldProps {
  isUseCallback: boolean;
}

const Count: React.FC<CountProps> = (props) => {
  const { text, countState } = props;
  return (
    <p className="py-1 text-xl">
      {text}:{countState}
    </p>
  );
};

const MemoButton: React.FC<MemoButtonProps> = React.memo((props) => {
  const { value, handleClick } = props;

  return (
    <Button
      variant={value === 'A' ? 'outlined' : 'contained'}
      onClick={handleClick}
      sx={{ marginLeft: value === 'B' ? '8px' : 'none' }}
    >
      {value}ボタン
    </Button>
  );
});

const Field: React.FC<FieldProps> = (props) => {
  const { isUseCallback } = props;
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementA = () => setCountA(countA + 1);
  const incrementB = () => setCountB(countB + 1);

  const callbackIncrementA = useCallback(() => setCountA(countA + 1), [countA]);
  const callbackIncrementB = useCallback(() => setCountB(countB + 1), [countB]);

  return (
    <>
      {isUseCallback ? (
        <>
          <Count text="A ボタン" countState={countA} />
          <p className="attention-red">レンダリングも{countA}回目</p>
          <Count text="B ボタン" countState={countB} />
          <p className="attention-red">レンダリングも{countB}回目</p>
          <div className="p-4">
            <MemoButton value="A" handleClick={callbackIncrementA} />
            <MemoButton value="B" handleClick={callbackIncrementB} />
          </div>
        </>
      ) : (
        <>
          <Count text="A ボタン" countState={countA} />
          <p className="attention-red">レンダリングは{countA + countB}回目</p>
          <Count text="B ボタン" countState={countB} />
          <p className="attention-red">レンダリングは{countA + countB}回目</p>
          <div className="p-4">
            <MemoButton value="A" handleClick={incrementA} />
            <MemoButton value="B" handleClick={incrementB} />
          </div>
        </>
      )}
    </>
  );
};

export const CallbackCounter: React.FC = () => {
  return (
    <>
      <div className="description">
        <div className="description-left">
          <p className="description-left-p">メモ化したコンポーネントに引き継ぐ関数はuseCallback化しましょう</p>
          <p className="description-left-p">
            <span className="hidden sm:inline">右</span>
            <span className="inline sm:hidden">下</span>の例ではカウントを更新する関数をuseCallback化しています
          </p>
          <p className="description-left-p">
            useCallback使用時は、Aボタンクリック時にBボタンのカウント表記はレンダリングされません
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
