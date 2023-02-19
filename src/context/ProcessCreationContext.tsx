import React, { useState, useEffect, createContext, ReactNode } from 'react';

export type ProcessBasicDetailsType = {
    deparmentUuid?: string;
    roomUuid?: string;
    bedUuid?: string;
    properties: {[id: string]: any}
}


export type ProcessCreationContextType = {
    processDetails?: ProcessBasicDetailsType,
    setProcessDetails?: (processDetails: ProcessBasicDetailsType) => void
}
const ProcessCreationDetailsContext = createContext<ProcessCreationContextType>({});

type ButtonProps = {
    children: ReactNode;
    
}
function ProcessCreationProvider({ children }: ButtonProps) {
    const [processDetails,setProcessDetails]  = useState<ProcessBasicDetailsType>({
        deparmentUuid: undefined,
        roomUuid: undefined,
        bedUuid: undefined,
        properties: {}
      });
    return (
        <ProcessCreationDetailsContext.Provider value={{processDetails: processDetails,setProcessDetails: setProcessDetails}}>
            {children}
        </ProcessCreationDetailsContext.Provider>
    )
  }
export {ProcessCreationDetailsContext, ProcessCreationProvider}