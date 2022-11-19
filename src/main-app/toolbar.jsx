import { useState } from 'react';
import { Link } from "react-router-dom";
import { Toolbar as MaterialToolbar, Box, IconButton, Typography, AppBar, Button, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Toolbar = ({ window }) => {
    const [isOpen, setIsOpen] = useState(false);

    const drawerWidth = 240;
    const navLinks = [
        {
            name: "Home",
            location: "/home",
        },
        {
            name: "Browse",
            location: "/browse",
        },
    ];
    const appName = "Universal Theme";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" position="static">
            <MaterialToolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    {appName}
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navLinks.map((item) => (
                        <Link to={item.location}>
                            <Button key={item.name} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </Box>
            </MaterialToolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={isOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        {appName}
                    </Typography>
                    <Divider />
                    <List>
                        {navLinks.map((item) => (
                            <Link to={item.location}>
                                <ListItem key={item.name} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    </Box>;
};
