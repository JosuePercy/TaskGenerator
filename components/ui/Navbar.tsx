import { useContext } from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UIContext } from '../../context/ui';


// Define el componente Navbar
export const Navbar = () => {
    const { openSideMenu } = useContext(UIContext)
    return (
        // Define la barra de navegación superior de la página
        <AppBar position="sticky" >
            <Toolbar>
                {/* Define un icono de menú que se muestra en la barra de navegación */}
                <IconButton
                    size='large'
                    edge='start'
                    onClick={openSideMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6'>OpenJira</Typography>
            </Toolbar>
        </AppBar>
    )
}
