import React from 'react';
import Styles from 'stylesheets/Subheader.module.scss';

export const SubHeader: React.FC = () => {
  return (
    <div className={Styles['slide-in-left']}>
      <div className={`p-32 h-96 w-4/5 ${Styles['container']}`}>
        <div className={`h-24 ${Styles['fade-up']}`}>
          <h1 className="mb-6 font-serif text-6xl italic">useRef</h1>
          <p className="font-serif text-xl italic">要素を参照する</p>
        </div>
      </div>
    </div>
  );
};
