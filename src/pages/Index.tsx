import React from 'react';
import { Link } from 'react-router-dom';

export const Index: React.FC = () => {
  return (
    <>
      <h1>Let's Study!</h1>
      <p>
        <Link to="/memo">useMemoを学ぶ</Link>
      </p>
      <p>
        <Link to="/ref">useRefを学ぶ</Link>
      </p>
    </>
  );
};
