import React, { useState, useMemo } from 'react';
import Button from '@mui/material/Button';
import { heavyFunc } from 'utils/heavyFunc';

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
  const memorizedResult = useMemo(() => heavyFunc(countB), [countB]);

  return (
    <>
      <div className="md:flex">
        <div className="p-8 leading-relaxed md:w-1/2">
          <p className="mb-2">
            初期値がnullではなく文字列や数値の場合、refオブジェクトのcurrentプロパティは書き換え可能になります。
          </p>
          <p className="mb-2">
            useRefのカウントを増やしても数値は変わりませんが、useStateのカウントを増やすと、再レンダリングにより値が更新されます。
          </p>
          <p>このことから、currentプロパティの状態が更新されても、再レンダリングが起きないことがわかります。</p>
          <p className="mb-2">
            再レンダリングをせずに内部に保持している値だけを更新したい場合は、useStateではなくuseRefを利用するようにしましょう。
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:p-8 md:w-1/2">
          <div className="container flex justify-around">
            <div>
              <p className="mb-2"> 再描画{countA}回目</p>
              <Button variant="outlined" onClick={resultA}>
                描画する
              </Button>
            </div>
            <div>
              <p className="mb-2">重い計算結果"{memorizedResult}"</p>
              <p>
                <Button variant="contained" onClick={resultB}>
                  重い計算
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
