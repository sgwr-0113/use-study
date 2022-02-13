import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Pages } from 'utils/pages';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
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
      <div className="w-screen h-auto bg-center bg-no-repeat bg-cover bg-top-wrapper sm:h-screen">
        <div className="px-12 pt-16 pb-24 w-full h-full bg-indigo-400/[0.2] sm:py-64 sm:px-32 sm:pt-32 sm:pb-48">
          <div className="text-shadow">
            <h1 className="font-serif text-3xl text-white sm:text-4xl lg:text-6xl">
              React hooksを
              <br />
              基礎から理解しよう
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8 w-screen sm:p-12">
        <div className="container flex flex-col items-center m-auto">
          <h1 className="m-auto mb-8 text-2xl sm:mb-16 sm:text-3xl lg:text-4xl">何を学ぶ？</h1>
          <Grid container spacing={{ xs: 3, sm: 4, lg: 6 }} className="max-w-screen-lg">
            {Pages.map((page, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Link to={page.path}>
                  <CustomButton variant="contained" className="flex content-center items-center w-full">
                    <p className="py-8 m-auto font-serif text-2xl sm:py-16 sm:text-3xl lg:py-32">{page.title}</p>
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
