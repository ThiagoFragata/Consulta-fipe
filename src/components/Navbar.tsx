import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import Image from 'next/image';
import router from 'next/router';
import Link from 'next/link';

import logo from '~/assets/logo.webp';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLinkMenu = (link: string) => {
    console.log(link);
    router.push(`${link}`);
  };

  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* menu mobile */}
          <Box
            sx={{
              maxWidth: '180px',
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
            mr={4}
            component="a"
            href="/"
          >
            <Image
              src={logo}
              alt="Picture of the author"
              height={60}
              width={464}
              objectFit="contain"
            />
          </Box>

          {/* menu desktop */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
            }}
          >
            <Box
              sx={{
                maxWidth: '180px',
                display: { xs: 'flex', md: 'none' },
                textDecoration: 'none',
                margin: '0 auto',
              }}
              component="a"
              href="/"
            >
              <Image
                src={logo}
                alt="Picture of the author"
                height={60}
                width={464}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
