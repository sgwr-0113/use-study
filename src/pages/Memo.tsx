import React from 'react';
import { Link } from 'react-router-dom';
import { ReactMemo } from 'components/memo/ReactMemo';

export const Memo: React.FC = () => {
  return (
    <>
      <h1>useMemo</h1>
      <ReactMemo />
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  );
};
