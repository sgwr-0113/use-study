import React from 'react';
import { Link } from 'react-router-dom';

export const Index: React.FC = () => {
  return (
    <>
      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-top-wrapper">
        <div className="py-64 px-40 w-full h-full bg-indigo-400/[0.2]">
          <div>
            <h1 className="font-serif text-6xl text-white">React hooksを基礎から理解しよう</h1>
          </div>
        </div>
      </div>
      <p className="text-3xl">
        <Link to="/memo">useMemoを学ぶ</Link>
      </p>
      <p className="text-3xl">
        <Link to="/ref">useRefを学ぶ</Link>
      </p>
    </>
  );
};
