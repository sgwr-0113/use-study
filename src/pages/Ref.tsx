import React from 'react';
import { Link } from 'react-router-dom';
import { RefFocus } from 'components/ref/RefFocus';
import { RefCompareState } from 'components/ref/RefCompareState';

export const Ref: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl">useRef</h1>
      <div className="container px-4 mx-auto max-w-screen-lg border border-red-500">
        <h2 className="mb-4 text-2xl">DOMを参照したい場合</h2>
        <RefFocus />
      </div>
      <div className="container px-4 mx-auto max-w-screen-lg border border-red-500">
        <h2 className="text-2xl">値を裏で保持したい場合</h2>
        <RefCompareState />
      </div>
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  );
};
