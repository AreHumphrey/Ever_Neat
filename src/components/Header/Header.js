import React from 'react'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import {styled, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
function ExpandingCatalogButton({ children }) {
    const [width, setWidth] = useState('100%');

    return (
        <div>
            <button
                    onMouseEnter={() => setWidth('200%')}
                    onMouseLeave={() => setWidth('100%')}>
                {children}
            </button>
        </div>
    );
}
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 20),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

export default function ButtonAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                color="default"
            >
                <Toolbar>
                    <IconButton

                        size="large"
                        edge="start"
                        color="white"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <IconButton
                            color="inherit"
                            sx={{
                                borderRadius: 4,
                                width: 210,
                                height: 40,
                                left: 85,
                                borderWidth: 5,
                                backgroundColor: '#EEEEEE',
                                shadowColor: 'black',
                                shadowRadius: 10,
                                shadowOpacity: 1,
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },

                            }}><MenuIcon/> Каталог
                        </IconButton>
                    </Typography>

                    <Typography align="center" sx={{justifyContent: 'center'}}>
                        <IconButton
                            color="inherit"
                            sx={{
                                borderRadius: 4,
                                width: 529,
                                height: 40,
                                left: -300,
                                borderWidth: 5,
                                backgroundColor: '#DCDCDC',
                                shadowColor: 'black',


                            }}><Search>
                            <SearchIconWrapper
                                sx={{
                                    backgroundColor: '#DCDCDC',
                                    shadowColor: 'black',

                                }}><SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                inputProps={{'aria-label': 'search'}}
                            /></Search>
                        </IconButton>
                    </Typography>
                    <Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}>
                            <ShoppingCart size/>
                        </IconButton>
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                                size="large">
                                <AccountCircle className='account__icon'/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',

                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Профиль </MenuItem>
                                <MenuItem onClick={handleClose}>Зарегистрироваться</MenuItem>
                            </Menu>
                        </div>
                    )}
                    <div>
                        <ExpandingCatalogButton>Catalog</ExpandingCatalogButton>

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
