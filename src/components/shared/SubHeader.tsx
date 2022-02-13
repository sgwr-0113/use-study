import React from 'react';
import Styles from 'stylesheets/Subheader.module.scss';

interface Props {
  title: string;
  text: string;
}

export const SubHeader: React.FC<Props> = (props) => {
  return (
    <div className={Styles['slide-in-left']}>
      <div className={`p-8 sm:p-32 h-40 sm:h-96 mt-2 sm:mt-0 w-4/5 ${Styles['container']}`}>
        <div className={`h-24 font-serif italic ${Styles['fade-up']}`}>
          <h1 className="mb-4 text-4xl sm:mb-6 sm:text-6xl">{props.title}</h1>
          <p className="sm:text-xl">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
