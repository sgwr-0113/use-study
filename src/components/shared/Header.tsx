import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Pages } from 'data/pages';

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="pages-menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {Pages.map((page) => (
            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to={page.path}>
                  <span className="font-serif">{page.title}</span>
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: { xs: 'center', md: 'unset' } }}>
          <Link to="/">
            <span className="font-serif">useStudy</span>
          </Link>
        </Typography>
        <Button color="inherit">
          <span className="font-serif">Login</span>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
