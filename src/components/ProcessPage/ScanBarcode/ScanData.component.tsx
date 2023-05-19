import { Button } from '@material-ui/core';
import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

interface IScanDataProps {
    setIsScanMode: (isScanMode: boolean) => void,
    setData: (data: string) => void
}
const ScanData: React.FC<IScanDataProps> = ({ setIsScanMode, setData }: IScanDataProps) => {
    return (
        <div>
            {<BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err: any, result: any) => {
                    if (result) {
                        setData(result.text);
                    }
                    else {
                        setData('');
                    }
                }}
            />}
            <Button variant="contained" color="primary" onClick={() => { setIsScanMode(false) }}>ביטול סריקה</Button>
        </div>


    );
}

export default ScanData