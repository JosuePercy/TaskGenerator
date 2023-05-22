import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

interface Props {
    children: React.ReactNode
}


export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}



export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open - Sidebar' })
    }

    const closeSideMenu = () => {

        dispatch({ type: 'UI - Close - Sidebar' })
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set - isAddingEntry', payload: isAdding })
    }

    const StartDragging = () => {
        dispatch({ type: 'UI - Start Dragging' })
    }

    const EndDragging = () => {

        dispatch({ type: 'UI - End Dragging' })
    }
    return (
        <UIContext.Provider value={{
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            EndDragging,
            StartDragging,
        }}>
            {children}
        </UIContext.Provider>
    )
}