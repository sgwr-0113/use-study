import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RefFocus: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputEl.current?.focus();
    console.log('inputEl.current:', inputEl.current);
  };
  return (
    <div className="description">
      <div className="description-left">
        <p className="description-left-p">離れた要素を操作したい時は、useRefを使いましょう</p>
        <p className="description-left-p">初期値にnullを与えることでDOMを参照させることができます</p>
        <h3 className="description-left-h3">使いどころ</h3>
        <ul className="description-left-ul">
          <li>クリックで別の要素を操作したい時</li>
          <li>インクリメンタルサーチ</li>
        </ul>
      </div>
      <div className="description-right">
        <Box className="mb-4 w-48">
          {/* TextFieldコンポーネントはinput要素を含んだdiv要素であり、inputに直接スタイルを反映することができないため、refではなくinputRefを用いる */}
          <TextField label="入力フォーム" variant="outlined" inputRef={inputEl} />
        </Box>
        <Button variant="outlined" onClick={handleClick} className="block w-48">
          フォーカスする
        </Button>
      </div>
    </div>
  );
};
