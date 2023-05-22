
import { FC } from "react";
import Head from "next/head";

import { Box } from "@mui/material"
import { Navbar } from "../ui";
import { Sidebar } from "../ui";

// Define las propiedades que recibe el componente Layout
interface Props {
    title?: string;
    children: React.ReactNode;
}

// Define el componente Layout
export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
    // Renderiza el componente Layout

    return (
        // Define un contenedor que se extiende a lo largo de toda la pantalla
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>

    )
}
