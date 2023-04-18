import React, { useState, createContext, ReactNode } from 'react';
import { Sector } from '../services/models/Sector';

export type ProcessSectorsContextType = {
    processSectors?: Sector[],
    setProcessSectors?: (processSectors: Sector[]) => void,
    drawerSectors?: Sector[],
    setDrawerSectors?: (sectors: Sector[]) => void,
    addProcessSectors?: (sectors: Sector[]) => void,
    removeProcessSector?: (sector: Sector) => void,
    changeSectorOwner?: (sectorId: string, ownerId: number) => void,
}
const ProcessSectorsContext = createContext<ProcessSectorsContextType>({});

type ButtonProps = {
    children: ReactNode;
}

function ProcessSectorsProvider({ children }: ButtonProps) {
    const [processSectors, setProcessSectors] = useState<Sector[]>([]);
    const [drawerSectors, setDrawerSectors] = useState<Sector[]>([]);

    const addProcessSectors = (sectors: Sector[]) => {
        setProcessSectors(current => [...current, ...sectors]);

        setDrawerSectors((current) =>
            current.filter((currentSector) => !sectors.map(({ id }) => id).includes(currentSector.id))
        );
    };

    const removeProcessSector = (sector: Sector) => {
        setProcessSectors((current) =>
            current.filter((currentSector) => currentSector.id !== sector.id)
        );

        setDrawerSectors(current => [...current, sector]);
    };

    const changeSectorOwner = (sectorId: string, ownerId: number) => {
        setProcessSectors((current) =>
            current.map(currentSector => {
                if (currentSector.id === sectorId) {
                    currentSector.defaultResponsibleUser.id = ownerId;
                }

                return currentSector;
            }
            ));
    };

    return (
        <ProcessSectorsContext.Provider value={{
            processSectors: processSectors,
            setProcessSectors: setProcessSectors,
            drawerSectors: drawerSectors,
            setDrawerSectors: setDrawerSectors,
            addProcessSectors: addProcessSectors,
            removeProcessSector: removeProcessSector,
            changeSectorOwner: changeSectorOwner
        }}>
            {children}
        </ProcessSectorsContext.Provider>
    )
}
export { ProcessSectorsContext, ProcessSectorsProvider }