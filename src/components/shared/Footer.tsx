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
    <div className="flex justify-between px-32 pt-16 pb-24 w-screen font-serif text-white bg-primary-blue">
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <h1 className="mb-4 text-4xl">useStudy</h1>
        </Link>
        <p>React hooksを基礎から理解しよう</p>
      </div>
      <CustomButton variant="contained" onClick={() => window.scrollTo(0, 0)}>
        Scroll To Top
      </CustomButton>
    </div>
  );
};
