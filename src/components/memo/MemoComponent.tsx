import React, { useState } from 'react';
import Button from '@mui/material/Button';

interface CountProps {
  text: string;
  countState: number;
}

interface FieldProps {
  isUseMemo: boolean;
}

// 親コンポーネントFieldのcountStateが更新された時のみレンダリングされる（メモ化）
const MemoCount: React.FC<CountProps> = React.memo(({ text, countState }) => {
  console.log('Count child component:', text);
  return (
    <p className="py-1 text-xl">
      {text}: {countState}
    </p>
  );
});

const Count: React.FC<CountProps> = ({ text, countState }) => {
  console.log('Count child component:', text);
  return (
    <p className="py-1 text-xl">
      {text}: {countState}
    </p>
  );
};

const Field: React.FC<FieldProps> = (props) => {
  const { isUseMemo } = props;
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  return (
    <>
      {isUseMemo ? (
        <>
          <MemoCount text="A ボタン" countState={countA} />
          <p className="attention-red">レンダリングも{countA}回目</p>
          <MemoCount text="B ボタン" countState={countB} />
          <p className="attention-red">レンダリングも{countB}回目</p>
        </>
      ) : (
        <>
          <Count text="A ボタン" countState={countA} />
          <p className="attention-red">レンダリングは{countA + countB}回目</p>
          <Count text="B ボタン" countState={countB} />
          <p className="attention-red">レンダリングは{countA + countB}回目</p>
        </>
      )}
      <div className="p-4">
        <Button variant="outlined" onClick={() => setCountA(countA + 1)}>
          A ボタン
        </Button>
        <Button variant="contained" onClick={() => setCountB(countB + 1)} sx={{ marginLeft: '8px' }}>
          B ボタン
        </Button>
      </div>
    </>
  );
};

export const MemoComponent: React.FC = () => {
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
            React.memo使用時は、Aボタンクリック時にBボタンのカウント表記はレンダリングされません
          </p>
          <h3 className="description-left-h3">使いどころ</h3>
          <ul className="description-left-ul">
            <li>タイマー</li>
            <li>インクリメンタルサーチ</li>
          </ul>
        </div>
        <div className="description-right">
          <div className="description-right-container">
            <h3 className="description-right-container-h3">React.memo使用</h3>
            <Field isUseMemo={true} />
          </div>
          <div className="mt-8 sm:mt-16 description-right-container">
            <h3 className="description-right-container-h3">React.memo非使用</h3>
            <Field isUseMemo={false} />
          </div>
        </div>
      </div>
    </>
  );
};
