import { FC, DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';


interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { StartDragging, EndDragging } = useContext(UIContext)

    const router = useRouter()

    const onDragStart = (event: DragEvent) => {

        event.dataTransfer.setData('text', entry._id)
        StartDragging();
    }

    const onDragEnd = () => {
        EndDragging();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }

    return (
        <Card
            onClick={onClick}
            sx={{ marginBottom: 1 }}
            // Eventos de drag
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>
                        {dateFunctions.getFormatDistanceToNow(entry.createAt)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>

    )
}
