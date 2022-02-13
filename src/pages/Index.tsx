import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Pages } from 'utils/pages';

const CustomButton = styled(Button)(({ theme }) => ({
  color: '#333333',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '24px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    boxShadow: 'none',
  },
}));

export const Index: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="w-screen h-auto bg-center bg-no-repeat bg-cover bg-top-wrapper lg:h-screen">
        <div className="px-8 pt-16 pb-24 w-full h-full bg-indigo-400/[0.2] sm:pt-32 sm:pb-60 lg:py-64 lg:px-32">
          <div className="text-shadow">
            <h1 className="font-serif text-3xl text-white sm:text-4xl lg:text-6xl">
              React hooksを
              <br />
              基礎から理解しよう
            </h1>
          </div>
        </div>
      </div>
      <div className="py-8 px-24 w-screen sm:py-12 sm:px-24">
        <div className="container flex flex-col items-center m-auto">
          <h1 className="m-auto mb-4 text-xl sm:mb-12 sm:text-3xl lg:mb-16 lg:text-4xl">何を学ぶ？</h1>
          <Grid container spacing={{ xs: 3, sm: 4, lg: 6 }} className="max-w-screen-lg">
            {Pages.map((page, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Link to={page.path}>
                  <CustomButton variant="contained" className="flex content-center items-center w-full">
                    <p className="py-2 m-auto font-serif text-base sm:py-8 sm:text-2xl lg:py-32 lg:text-3xl">
                      {page.title}
                    </p>
                  </CustomButton>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};
