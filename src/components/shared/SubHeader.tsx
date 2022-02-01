import React from 'react';
import Styles from 'stylesheets/Subheader.module.scss';

interface Props {
  title: string;
  text: string;
}

export const SubHeader: React.FC<Props> = (props) => {
  return (
    <div className={Styles['slide-in-left']}>
      <div className={`p-8 md:p-32 h-40 md:h-96 mt-2 md:mt-0 w-4/5 ${Styles['container']}`}>
        <div className={`h-24 ${Styles['fade-up']}`}>
          <h1 className="mb-4 font-serif text-4xl italic md:mb-6 md:text-6xl">{props.title}</h1>
          <p className="font-serif italic md:text-xl">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
