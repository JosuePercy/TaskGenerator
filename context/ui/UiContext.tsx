import { createContext } from 'react';


export interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;

    setIsAddingEntry: (isAdding: boolean) => void;

    StartDragging: () => void;
    EndDragging: () => void;
}


export const UIContext = createContext({} as ContextProps)