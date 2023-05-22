import { useContext } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from "@mui/material"

import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { UIContext } from '../../context/ui';

// Define una constante para los elementos del menú
const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext)


    return (
        <Drawer
            anchor="left"
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>
                <List>
                    {/* Itera a través de los elementos del menú y crea un ListItemButton para cada uno */}
                    {menuItems.map((text, index) => (
                        <ListItemButton key={index}>
                            {/* Muestra el icono de InboxIcon o MailOutlineIcon, dependiendo del índice actual */}
                            <ListItemIcon>{index % 2 ? <InboxIcon /> : <MailOutlineIcon />}</ListItemIcon>
                            {/* Muestra el texto del elemento actual */}
                            <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                {/* Separcion de List  */}
                <Divider />
                <List>
                    {/* Itera a través de los elementos del menú y crea un ListItemButton para cada uno */}
                    {menuItems.map((text, index) => (
                        <ListItemButton key={index}>
                            {/* Muestra el icono de InboxIcon o MailOutlineIcon, dependiendo del índice actual */}
                            <ListItemIcon>{index % 2 ? <InboxIcon /> : <MailOutlineIcon />}</ListItemIcon>
                            {/* Muestra el texto del elemento actual */}
                            <ListItemText>{text}</ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
