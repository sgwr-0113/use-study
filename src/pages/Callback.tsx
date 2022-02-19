import React from 'react';
import { SubHeader } from 'components/shared/SubHeader';
import { CallbackCounter } from 'components/callback/CallbackCounter';

export const Callback: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <SubHeader title="useCallback" text="関数を再利用する" />
      <section className="py-12">
        <div className="section-container">
          <h2 className="section-heading">関数を再利用する</h2>
          <CallbackCounter />
        </div>
      </section>
      {/* <section className="py-12 bg-blue-100">
        <div className="section-container">
          <h2 className="section-heading">結果を再利用する</h2>
          <MemoResult />
        </div>
      </section> */}
    </>
  );
};
