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
  return (
    <>
      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-top-wrapper">
        <div className="py-64 px-40 w-full h-full bg-indigo-400/[0.2]">
          <div>
            <h1 className="font-serif text-6xl text-white">React hooksを基礎から理解しよう</h1>
          </div>
        </div>
      </div>
      <div className="py-8 w-screen md:py-12">
        <div className="container flex flex-col items-center m-auto">
          <h1 className="m-auto mb-12 text-4xl md:mb-16">何を学ぶ？</h1>
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
