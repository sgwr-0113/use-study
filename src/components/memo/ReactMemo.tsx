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
    <p className="text-xl">
      {text}: {countState}
    </p>
  );
});

const Count: React.FC<CountProps> = ({ text, countState }) => {
  console.log('Count child component:', text);
  return (
    <p className="text-xl">
      {text}: {countState}
    </p>
  );
};

const Field: React.FC<FieldProps> = (props) => {
  const [countStateA, setCountStateA] = useState<number>(0);
  const [countStateB, setCountStateB] = useState<number>(0);

  const incrementACounter = () => setCountStateA(countStateA + 1);
  const incrementBCounter = () => setCountStateB(countStateB + 1);
  return (
    <>
      {props.isUseMemo === true ? (
        <>
          <MemoCount text="A ボタン" countState={countStateA} />
          <MemoCount text="B ボタン" countState={countStateB} />
          <div className="p-4">
            <Button variant="outlined" onClick={incrementACounter}>
              A ボタン
            </Button>
            <Button variant="contained" onClick={incrementBCounter} sx={{ marginLeft: '8px' }}>
              B ボタン
            </Button>
          </div>
        </>
      ) : (
        <>
          <Count text="A ボタン" countState={countStateA} />
          <Count text="B ボタン" countState={countStateB} />
          <div className="p-4">
            <Button variant="outlined" onClick={incrementACounter}>
              A ボタン
            </Button>
            <Button variant="contained" onClick={incrementBCounter} sx={{ marginLeft: '8px' }}>
              B ボタン
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export const ReactMemo: React.FC = () => {
  return (
    <>
      <div className="md:flex">
        <div className="p-8 leading-relaxed md:w-1/2">
          <p className="mb-2">頻繁に更新されるものの側にあるものはReact.memoでメモ化しましょう</p>
          <p className="mb-2">React.memoが使用された方では、Aボタンクリック時にBボタンはレンダリングされません</p>
          <h3 className="py-4 text-xl">React.memoの使いどころ</h3>
          <ul className="list-disc list-inside">
            <li>タイマー</li>
            <li>インクリメンタルサーチ</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2">
          <div className="container p-4 md:p-8">
            <h3 className="mb-2">React.memo使用表記</h3>
            <Field isUseMemo={true} />
          </div>
          <div className="container p-4 md:p-8">
            <h3 className="mb-2">React.memo非使用表記</h3>
            <Field isUseMemo={false} />
          </div>
        </div>
      </div>
    </>
  );
};
