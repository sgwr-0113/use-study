import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  borderRadius: '100px',
  color: 'white',
  border: '2px solid white',
  height: 'fit-content',
  backgroundColor: '#01579B',
});

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-between px-8 pt-8 pb-16 w-screen font-serif text-white bg-primary-blue sm:px-32 sm:pt-16 sm:pb-24">
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <h1 className="mb-4 text-3xl sm:text-4xl">useStudy</h1>
        </Link>
        <p className="text-sm sm:text-base">React hooksを基礎から理解しよう</p>
      </div>
      <CustomButton variant="contained" onClick={() => window.scrollTo(0, 0)}>
        <p className="p-1 text-xs sm:p-0 sm:text-sm">
          <span className="block sm:inline sm:mr-1">Scroll</span>
          <span className="block sm:inline sm:mr-1">To</span>
          <span className="block sm:inline">Top</span>
        </p>
      </CustomButton>
    </div>
  );
};
