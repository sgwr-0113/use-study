import React from 'react';
import { Link } from 'react-router-dom';
import { RefFocus } from 'components/ref/RefFocus';
import { RefCompareState } from 'components/ref/RefCompareState';

export const Ref: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl">useRef</h1>
      <div className="container border border-red-500 max-w-screen-lg">
        <h2>DOMを参照したい場合</h2>
        <RefFocus />
        <h2>値を裏で保持したい場合</h2>
        <RefCompareState />
      </div>
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  );
};
