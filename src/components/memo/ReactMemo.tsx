import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface CountProps {
  text: string;
  countState: number;
}

interface FieldProps {
  isUseMemo: boolean;
}

const MyPaper = styled(Paper)({
  width: 360,
  height: 360,
  padding: 24,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

// 親コンポーネントFieldのcountStateが更新された時のみレンダリングされる（メモ化）
const MemoCount: React.FC<CountProps> = React.memo(({ text, countState }) => {
  console.log('Count child component:', text);
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

const Count: React.FC<CountProps> = ({ text, countState }) => {
  console.log('Count child component:', text);
  return (
    <p>
      {text}:{countState}
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
          <div>
            <Button variant="contained" color="primary" onClick={incrementACounter}>
              A ボタン
            </Button>
            <Button variant="contained" color="secondary" onClick={incrementBCounter}>
              B ボタン
            </Button>
          </div>
        </>
      ) : (
        <>
          <Count text="A ボタン" countState={countStateA} />
          <Count text="B ボタン" countState={countStateB} />
          <div>
            <Button variant="contained" color="primary" onClick={incrementACounter}>
              A ボタン
            </Button>
            <Button variant="contained" color="secondary" onClick={incrementBCounter}>
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
          <h3 className="py-4 text-xl">React.memo化した方がいい例</h3>
          <ul className="list-disc list-inside">
            <li>タイマーの側にあるボタン</li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center md:p-8 md:w-1/2">
          <div className="container p-4 md:p-8">
            <h3 className="mb-2 text-xl">React.memo使用</h3>
            <Field isUseMemo={true} />
          </div>
          <div className="container p-4 md:p-8">
            <h3 className="mb-2 text-xl">React.memo非使用</h3>
            <Field isUseMemo={false} />
          </div>
        </div>
      </div>
    </>
  );
};
