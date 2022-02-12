import React from 'react';
import { RefFocus } from 'components/ref/RefFocus';
import { RefCompareState } from 'components/ref/RefCompareState';
import { SubHeader } from 'components/shared/SubHeader';

export const Ref: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <SubHeader title="useRef" text="要素を参照する" />
      <section className="py-12">
        <div className="section-container">
          <h2 className="section-heading">DOMを参照する</h2>
          <RefFocus />
        </div>
      </section>
      <section className="py-12 bg-blue-100">
        <div className="section-container">
          <h2 className="section-heading">値を裏で保持する</h2>
          <RefCompareState />
        </div>
      </section>
    </>
  );
};
