import { NextPage } from "next"

import { Grid, CardHeader, Card, CardContent } from "@mui/material"

import { Layout } from "../../components/layouts"
import { EntryList, NewEntry } from "../../components/ui"

const Home: NextPage = () => {

    console.log('NEXT_PUBLIC_SECRET_KEY', process.env.NEXT_PUBLIC_SECRET_KEY)
    console.log('NEXT_PUBLIC_CLIENT_KEY', process.env.NEXT_PUBLIC_CLIENT_KEY)
    return (
        <Layout title="RegisterTask">

            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Pendientes' />
                        {/* Agregar una nueva entrada*/}
                        {/* Listado de las entradas */}
                        <NewEntry />
                        <EntryList status={'pending'} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='En Progreso' />
                        <EntryList status={'in-progress'} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Completadas' />
                        <EntryList status={'finished'} />
                    </Card>
                </Grid>
            </Grid>
        </Layout>


    )
}

export default Home