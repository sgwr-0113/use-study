import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RefFocus: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputEl.current?.focus();
    console.log('inputEl.current:', inputEl.current);
    //inputEl.current: <input type="text">
  };
  return (
    <div className="md:flex">
      <div className="p-8 leading-relaxed md:w-1/2">
        <p>初期値がnullの場合、useRefはDOMを参照させる役割をもちます。</p>
      </div>
      <div className="flex flex-col items-center py-4 px-16 leading-relaxed md:py-8 md:w-1/2">
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
