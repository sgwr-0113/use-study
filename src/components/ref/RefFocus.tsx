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
    <>
      <Box className="mb-2 w-48">
        {/* TextFieldコンポーネントはinput要素を含んだdiv要素であり、inputに直接スタイルを反映することができないため、refではなくinputRefを用いる */}
        <TextField label="入力フォーム" variant="outlined" inputRef={inputEl} />
      </Box>
      <Button variant="outlined" onClick={handleClick} className="block w-48">
        フォーカスする
      </Button>
    </>
  );
};
