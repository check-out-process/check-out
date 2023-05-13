import { Button } from '@material-ui/core';
import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";


interface IScanBedPageProps {
}
const ScanBedPage: React.FC<IScanBedPageProps> = ({ }: IScanBedPageProps) => {
    const [data, setData] = React.useState("Not Found");
    const [isScanMode, setIsScanMode] = React.useState(false);

    const onClickScanMode = () => {
        setIsScanMode(!isScanMode);
    }
    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={onClickScanMode}>
            {isScanMode ? "סיום סריקה" : "סרוק ברקוד"}
            </Button>
            {isScanMode && <BarcodeScannerComponent
                width={500}
                height={500}
                torch={isScanMode}
                onUpdate={(err, result: any) => {
                    if (result) {
                        setData(result.text);
                    }
                    else {
                        setData("Not Found");
                    }
                }}
            />}
            <p onClick={() => openInNewTab(data)}>{data}</p>
        </div>


    );
}

export default ScanBedPage