import React, { useState, createContext, ReactNode } from 'react';
import { Sector } from '../services/models/Sector';

export type ProcessSectorsContextType = {
    processSectors?: Sector[],
    setProcessSectors?: (processSectors: Sector[]) => void,
    notDefaultSectors?: Sector[],
    setNotDefaultSectors?: (notDefaultSectors: Sector[]) => void,
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
    const [notDefaultSectors, setNotDefaultSectors] = useState<Sector[]>([]);
    const [choosenNotDefaultSectors, setChoosenNotDefaultSectors] = useState<Sector[]>([]);

    const addProcessSectors = (sectors: Sector[]) => {
        setProcessSectors(current => [...current, ...sectors]);

        setChoosenNotDefaultSectors(notDefaultSectors.filter((currentSector) => sectors.map(({ id }) => id).includes(currentSector.id)));
        setNotDefaultSectors((current) =>
            current.filter((currentSector) => !sectors.map(({ id }) => id).includes(currentSector.id))
        );
    };

    const removeProcessSector = (sector: Sector) => {
        setProcessSectors((current) =>
            current.filter((currentSector) => currentSector.id !== sector.id)
        );
        if (choosenNotDefaultSectors.map(({ id }) => id).includes(sector.id)) {
            setChoosenNotDefaultSectors((current) =>
                current.filter((currentSector) => currentSector.id !== sector.id)
            );
            setNotDefaultSectors(current => [...current, sector]);
        }
    };

    const changeSectorOwner = (sectorId: string, ownerId: number) => {
        setProcessSectors((current) =>
            current.map(currentSector => {
                if (currentSector.id === sectorId) {
                    currentSector.ownerId = ownerId;
                }

                return currentSector;
            }
            ));
    };

    return (
        <ProcessSectorsContext.Provider value={{
            processSectors: processSectors,
            setProcessSectors: setProcessSectors,
            notDefaultSectors: notDefaultSectors,
            setNotDefaultSectors: setNotDefaultSectors,
            addProcessSectors: addProcessSectors,
            removeProcessSector: removeProcessSector,
            changeSectorOwner: changeSectorOwner
        }}>
            {children}
        </ProcessSectorsContext.Provider>
    )
}
export { ProcessSectorsContext, ProcessSectorsProvider }