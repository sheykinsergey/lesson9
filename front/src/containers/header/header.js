import { Link } from "react-router-dom";
import { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import logo from '../../logo.png'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0
};

export function Header(){

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return(
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <Link to='/'><Avatar alt="Logo" src={logo} /></Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleOpen}>AddArticle</Typography>

                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>

              <Button
                onClick={handleOpen}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >AddArticle</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/users/8" style={{ textDecoration: 'none' }}>Profile</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">LogOut</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
      >
      <Card sx={style}>
        <CardHeader
            action={
              <IconButton 
              style={{padding: 0}}
                onClick={handleClose} >
                    <CloseIcon />
              </IconButton>
            } />

            <CardContent>
              <Typography variant="h6" component="h6">
                  Add Article
                </Typography>
                <TextareaAutosize
                  minRows={10}
                  placeholder="Add post"
                  style={{ width: "100%" }}
                />
                <Stack direction="row" spacing={43}>
                  <Button variant="contained" onClick={handleClose}>Cancel</Button>
                  <Button variant="contained">Add</Button>
                </Stack>
            </CardContent>
      </Card>
      </Modal>
    </AppBar>

  );
};