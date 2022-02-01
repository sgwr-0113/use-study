import React from 'react';
import { Link } from 'react-router-dom';

export const Index: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl">Let's Study!</h1>
      <p className="text-3xl">
        <Link to="/memo">useMemoを学ぶ</Link>
      </p>
      <p className="text-3xl">
        <Link to="/ref">useRefを学ぶ</Link>
      </p>
    </>
  );
};
