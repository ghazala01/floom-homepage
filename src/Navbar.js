import * as React from 'react';
import './Navbar.css';
import logo from './logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const pages = [
  'Shop',
  'Occasion',
  'Same Day Delivery',
  'Get Free Delivery',
  "Mother's Day",
  'Want To Sell on Floom?',
  'Merch',
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="nav"
      style={{ backgroundColor: '#fff', color: '#202523' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="nav__small">
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                sx={{
                  marginTop: '0.25rem',
                  marginLeft: '-0.95rem',
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key="Shipping" onClick={handleCloseNavMenu}>
                  <p className="nav__p">Ship to:</p>
                  <img
                    className="nav__flag"
                    src="https://d34g78fsj6jubz.cloudfront.net/images/en_gb-flag.png"
                    alt="UK flag"
                  />
                  <img
                    className="nav__flag"
                    src="https://d34g78fsj6jubz.cloudfront.net/images/en_us-flag.png"
                    alt="US flag"
                  />
                </MenuItem>

                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <p className="nav__p">{page}</p>
                  </MenuItem>
                ))}

                <MenuItem key="Sign In" onClick={handleCloseNavMenu}>
                  <PersonOutlineOutlinedIcon
                    className="nav__icon"
                    style={{ paddingLeft: 0 }}
                  />
                  <p className="nav__p">Sign In</p>
                </MenuItem>

                <MenuItem key="Phone" onClick={handleCloseNavMenu}>
                  <LocalPhoneOutlinedIcon
                    className="nav__icon"
                    style={{ paddingLeft: 0 }}
                  />
                  <p className="nav__p">+44 (0) 20 8068 7498</p>
                </MenuItem>
              </Menu>
            </Box>
            <div>
              <img className="nav__logo--hide" src={logo} alt="logo" />
            </div>
            <div className="nav__icons--hide">
              <PersonOutlineOutlinedIcon className="nav__icon" />
              <ShoppingBasketOutlinedIcon className="nav__icon" />
            </div>
          </div>

          <Box className="nav__middle">
            <div className="nav__row1">
              <div className="nav__shipping">
                <p className="nav__p">Ship To:</p>
                <img
                  className="nav__flag"
                  src="https://d34g78fsj6jubz.cloudfront.net/images/en_gb-flag.png"
                  alt="UK flag"
                />
                <img
                  className="nav__flag"
                  src="https://d34g78fsj6jubz.cloudfront.net/images/en_us-flag.png"
                  alt="US flag"
                />
              </div>

              <img className="nav__logo" src={logo} alt="logo" />

              <div className="nav__icons">
                <PersonOutlineOutlinedIcon className="nav__icon" />
                <LocalPhoneOutlinedIcon className="nav__icon" />
                <LocalShippingOutlinedIcon className="nav__icon" />
                <ShoppingBasketOutlinedIcon className="nav__icon" />
              </div>
            </div>
            <div className="nav__row2">
              {pages.map((page) => (
                <button
                  className="nav__btn"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
