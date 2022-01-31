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
      <h2>React.memo</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MyPaper>
          <h3>React.memo使用時</h3>
          <Field isUseMemo={true} />
        </MyPaper>
        <MyPaper>
          <h3>React.memoを使わなかった場合</h3>
          <Field isUseMemo={false} />
        </MyPaper>
      </div>
      <p>頻繁に更新されるものの側にあるものはReact.memoでメモ化した方がいい（タイマーの側にあるボタンなど）</p>
    </>
  );
};
