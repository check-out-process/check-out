import React, { useState, createContext, ReactNode } from 'react';
import { Sector } from '../services/models/Sector';

export type ProcessSectorsContextType = {
    processSectors?: Sector[],
    setProcessSectors?: (processSectors: Sector[]) => void,
    notDefaultSectors?: Sector[],
    setNotDefaultSectors?: (notDefaultSectors: Sector[]) => void,
    addProcessSectors?: (sectors: Sector[]) => void,
    removeProcessSector?: (sector: Sector) => void,
}
const ProcessSectorsContext = createContext<ProcessSectorsContextType>({});

type ButtonProps = {
    children: ReactNode;
}

function ProcessSectorsProvider({ children }: ButtonProps) {
    const [processSectors, setProcessSectors] = useState<Sector[]>([]);
    const [notDefaultSectors, setNotDefaultSectors] = useState<Sector[]>([]);

    const addProcessSectors = (sectors: Sector[]) => {
        setProcessSectors(current => [...current, ...sectors]);

        setNotDefaultSectors((current) =>
            current.filter((currentSector) => !sectors.map(({ id }) => id).includes(currentSector.id))
        );
    };

    const removeProcessSector = (sector: Sector) => {
        setProcessSectors((current) =>
            current.filter((currentSector) => currentSector.id !== sector.id)
        );
        // if its not default sector add to  notDefaultSectorsData
    };

    return (
        <ProcessSectorsContext.Provider value={{
            processSectors: processSectors,
            setProcessSectors: setProcessSectors,
            notDefaultSectors: notDefaultSectors,
            setNotDefaultSectors: setNotDefaultSectors,
            addProcessSectors: addProcessSectors,
            removeProcessSector: removeProcessSector
        }}>
            {children}
        </ProcessSectorsContext.Provider>
    )
}
export { ProcessSectorsContext, ProcessSectorsProvider }