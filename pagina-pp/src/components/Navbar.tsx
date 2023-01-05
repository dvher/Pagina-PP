import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/img/logo.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";

const pages = ["Inicio", "Noticias", "Adopciones", "Blog", "Contacto"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton size="large">
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="pp logo"
              src={logo}
            />
          </IconButton>

          {/* Hamburger main menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "black" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      fontFamily: "Rubik",
                      color: "black",
                      textDecoration: "none",
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                variant="text"
                component="a"
                href="/"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: "Rubik",
                  m: 2,
                  color: "black",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "Rubik",
                color: "black",
                textTransform: "none",
              }}
              startIcon={<AccountCircle sx={{ color: "black" }} />}
            >
              Iniciar Sesion
            </Button>

            <Button
              variant="text"
              component="a"
              href="/"
              sx={{
                m: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "Rubik",
                color: "black",
                textTransform: "none",
              }}
            >
              Registrarse
            </Button>
          </Box>

          {/* Hamburger User menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: "Rubik",
                    color: "black",
                    textDecoration: "none",
                  }}
                  textAlign="center"
                >
                  Iniciar Sesion
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: "Rubik",
                    color: "black",
                    textDecoration: "none",
                  }}
                  textAlign="center"
                >
                  Registrarse
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
