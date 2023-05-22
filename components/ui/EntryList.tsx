import { DragEvent, FC, useContext, useMemo } from "react"

import { List, Paper, useStepContext } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "../../interfaces"

import { EntriesContext } from "../../context/entries"
import { UIContext } from "../../context/ui"

import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext)
    const { isDragging, EndDragging } = useContext(UIContext)

    // Regresa la lista de las entradas
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {

        event.preventDefault();
    }

    const onDrogEntry = (event: DragEvent<HTMLDivElement>) => {
        console.log('gaksopjkpfsajfjksa')
        const id = event.dataTransfer.getData('text');

        const entry = entries.find(e => e._id === id)!;

        entry.status = status;
        updateEntry(entry);
        EndDragging();
    }



    return (
        <div
            onDrop={onDrogEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>

                {/* Todo: cambiará depenediendo si esto haciendo drag o no  */}

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>

                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }


                </List>
            </Paper>
        </div>
    )
}
