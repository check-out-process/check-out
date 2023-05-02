import React, { useState, useEffect, useContext } from 'react';
import { ProcessSectorsContext } from "../../../../context/ProcessSectorsContext";
import { Role, User } from "../../../../services/models/User";
import Dropdown, { DropdownKeyPair, onChangeEvent } from "../../Select/Dropdown.component";
import { Sector } from "../../../../services/models/Sector";
import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core';


interface ISectorModalBodyProps {
    sector: Sector,
    handleClose: () => void
}

const useStyles = makeStyles(() =>
    createStyles({
        saveButton: {
            position: 'absolute',
            bottom: 0,
            marginBottom: '15px',
        },
        saveButtonDiv: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);


const SectorModalBody: React.FC<ISectorModalBodyProps> = ({ sector, handleClose }: ISectorModalBodyProps) => {
    const classes = useStyles();

    const { changeSectorOwner } = useContext(ProcessSectorsContext);

    const [sectorOwnerOptions, setSectorOwnerOptions] = useState<DropdownKeyPair[]>([]);
    const [sectorOwner, setSectorOwner] = useState<User>(sector.defaultResponsibleUser);

    useEffect(() => {
        fetchSectorOwnerOptions();
    }, [])

    function onChange(event: onChangeEvent): void {
        const user = event.target.value as User;

        setSectorOwner(user);
    }

    const fetchSectorOwnerOptions = () => {
        const data: DropdownKeyPair[] = sector.responsibleUsers.map((user: User) =>
            ({ value: user, displayName: user.fullname }));
        setSectorOwnerOptions(data);
        setSectorOwner(sector.defaultResponsibleUser);
    }

    const onSave = () => {
        changeSectorOwner(sector.id, sectorOwner);
        handleClose();
    }


    return (
        <div>
            <Dropdown
                defaultValue={sectorOwner}
                title='בחירת אחראי'
                data={sectorOwnerOptions}
                disabled={false}
                onChange={onChange} />
            <div className={classes.saveButtonDiv}>
                <Button className={classes.saveButton} variant="contained" color="primary" onClick={() => { onSave() }}>שמור</Button>
            </div>

        </div>
    )
}

export default SectorModalBody