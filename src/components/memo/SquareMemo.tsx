import React, { useState, useMemo } from 'react';
import Button from '@mui/material/Button';

const square = (parameter: number) => {
  console.log('square関数の実行観察');
  //正方形の面積を求める関数を定義する
  //パフォーマンスを観察したいので、わざと重い処理を置いてみる
  let i = 0;
  while (i < 20000000) i++;
  return parameter * parameter;
};

export const SquareMemo = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // 1ずつカウントが増える足し算A
  const resultA = () => {
    return setCountA(countA + 1);
  };

  // 1ずつカウントが増える足し算B
  const resultB = () => {
    return setCountB(countB + 1);
  };

  //正方形の面積をcountBを使った計算結果
  //useMemoを使って、計算結果をメモ化している
  //第２引数である依存配列にcountBを渡しているので、countAを更新しても、countBが更新されなければメモ化された描画結果を再利用するためsquare関数は更新されない
  const squareArea = useMemo(() => square(countB), [countB]);

  return (
    <>
      <p>
        再描画{countA}回目
        <Button variant="outlined" onClick={resultA}>
          描画する
        </Button>
      </p>
      <p>【正方形の面積】</p>
      <p>
        計算結果{countB}{' '}
        <Button variant="outlined" onClick={resultB}>
          B + 1
        </Button>
      </p>
      <p>計算結果B ✕ 計算結果B = {squareArea}</p>
    </>
  );
};
