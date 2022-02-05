import React from 'react';
import { Link } from 'react-router-dom';
import { ReactMemo } from 'components/memo/ReactMemo';
import { SubHeader } from 'components/shared/SubHeader';
import { SquareMemo } from 'components/memo/SquareMemo';

export const Memo: React.FC = () => {
  return (
    <>
      <SubHeader title="useMemo" text="結果を再利用する" />
      <section className="py-12">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="px-8 text-3xl">コンポーネントを再利用する React.memo</h2>
          <ReactMemo />
        </div>
      </section>
      <section className="py-12 bg-blue-100">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="px-8 text-3xl">結果を再利用する useMemo</h2>
          <SquareMemo />
        </div>
      </section>
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  );
};
