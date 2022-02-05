import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Pages } from 'data/pages';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '24px',
  backgroundColor: 'rgb(219 234 254);',
}));

export const Index: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="w-screen h-auto bg-center bg-no-repeat bg-cover bg-top-wrapper md:h-screen">
        <div className="px-12 pt-16 pb-24 w-full h-full bg-indigo-400/[0.2] sm:pt-32 sm:pb-48 md:py-64 md:px-32">
          <div>
            <h1 className="font-serif text-3xl text-white sm:text-4xl md:text-6xl">
              React hooksを
              <br />
              基礎から理解しよう
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8 w-screen md:p-12">
        <div className="container flex flex-col items-center m-auto">
          <h1 className="m-auto mb-8 text-3xl md:mb-16 md:text-4xl">何を学ぶ？</h1>
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} className="max-w-screen-lg">
            {Pages.map((page, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link to={page.path}>
                  <Item className="flex content-center items-center h-36 md:h-72">
                    <p className="m-auto text-3xl">{page.title}</p>
                  </Item>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};
