import React from 'react';
import { Link } from 'react-router-dom';
import { RefFocus } from 'components/ref/RefFocus';
import { RefCompareState } from 'components/ref/RefCompareState';
import { SubHeader } from 'components/shared/SubHeader';

export const Ref: React.FC = () => {
  return (
    <>
      <SubHeader />
      <section className="py-12">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="px-8 text-3xl">DOMを参照する</h2>
          <RefFocus />
        </div>
      </section>
      <section className="py-12 bg-blue-100">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="px-8 text-3xl">値を裏で保持する</h2>
          <RefCompareState />
        </div>
      </section>
      <p>
        <Link to="/">トップへ戻る</Link>
      </p>
    </>
  );
};
