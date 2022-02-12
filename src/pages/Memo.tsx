import React from 'react';
import { SubHeader } from 'components/shared/SubHeader';
import { MemoComponent } from 'components/memo/MemoComponent';
import { MemoResult } from 'components/memo/MemoResult';

export const Memo: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <SubHeader title="useMemo" text="結果を再利用する" />
      <section className="py-12">
        <div className="section-container">
          <h2 className="section-heading">コンポーネントを再利用する（React.memo）</h2>
          <MemoComponent />
        </div>
      </section>
      <section className="py-12 bg-blue-100">
        <div className="section-container">
          <h2 className="section-heading">結果を再利用する</h2>
          <MemoResult />
        </div>
      </section>
    </>
  );
};
