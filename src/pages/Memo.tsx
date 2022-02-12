import React from 'react';
import { ReactMemo } from 'components/memo/ReactMemo';
import { SubHeader } from 'components/shared/SubHeader';
import { SquareMemo } from 'components/memo/SquareMemo';

export const Memo: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <SubHeader title="useMemo" text="結果を再利用する" />
      <section className="py-12">
        <div className="section-container">
          <h2 className="section-heading">コンポーネントを再利用する（React.memo）</h2>
          <ReactMemo />
        </div>
      </section>
      <section className="py-12 bg-blue-100">
        <div className="section-container">
          <h2 className="section-heading">結果を再利用する</h2>
          <SquareMemo />
        </div>
      </section>
    </>
  );
};
