import React, { useState, useEffect, useContext } from 'react';
import { ProcessSectorsContext } from "../../../../context/ProcessSectorsContext";
import { User, Sector } from '@checkout/types';
import Dropdown, { DropdownKeyPair, onChangeEvent } from "../../Select/Dropdown.component";
import { Button, CircularProgress } from '@material-ui/core';
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
            boxShadow: 'none'
        },
        saveButtonDiv: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);


const SectorModalBody: React.FC<ISectorModalBodyProps> = ({ sector, handleClose }: ISectorModalBodyProps) => {
    const classes = useStyles();
    const { changeSectorOwner, changeSectorCommittingUser } = useContext(ProcessSectorsContext);
    const [sectorOwnerOptions, setSectorOwnerOptions] = useState<DropdownKeyPair[]>([]);
    const [sectorOwner, setSectorOwner] = useState<User>(sector.defaultResponsibleUser);

    const [sectorCommitingUserOptions, SetSectorCommitingUserOptions] = useState<DropdownKeyPair[]>([]);
    const [sectorCommitingUser, setSectorCommitingUser] = useState<User>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        setLoadingUser(true);
        fetchSectorUsersOptions();
    }, [])

    function onChangeOwner(event: onChangeEvent): void {
        const user = event.target.value as User;

        setSectorOwner(user);
    }

    function onChangeCommitingUser(event: onChangeEvent): void {
        const user = event.target.value as User;

        setSectorCommitingUser(user);
    }

    const fetchSectorUsersOptions = () => {
        const responsibleUsers: DropdownKeyPair[] = sector.responsibleUsers?.map((user: User) =>
            ({ value: user, displayName: user.fullname }));
        setSectorOwnerOptions(responsibleUsers);
        setSectorOwner(sector.defaultResponsibleUser);

        const committingUsers: DropdownKeyPair[] = sector.committingUsers.map((user: User) =>
            ({ value: user, displayName: user.fullname }));
        SetSectorCommitingUserOptions(committingUsers);
        const user = sector.committingUsers?.find(user => user.id === sector.defaultCommittingUser?.id)
        setSectorCommitingUser(user);
        setLoadingUser(false)
    }

    const onSave = () => {
        sector.defaultResponsibleUser ? changeSectorOwner(sector.id, sectorOwner) :
            changeSectorCommittingUser(sector.id, sectorCommitingUser);
        handleClose();
    }

    const isDisabled = () => {
        return sectorOwner || sectorCommitingUser ? false : true;
    }

    return (
        <>
            {loadingUser ? <CircularProgress /> :
                <div>
                    {sector.defaultResponsibleUser ?
                        <Dropdown
                            defaultValue={sectorOwner}
                            title='בחירת אחראי'
                            data={sectorOwnerOptions}
                            disabled={false}
                            onChange={onChangeOwner} /> :
                        <Dropdown
                            defaultValue={sectorCommitingUser}
                            title='בחירת מטפל'
                            data={sectorCommitingUserOptions}
                            disabled={false}
                            onChange={onChangeCommitingUser} />
                    }
                    <div className={classes.saveButtonDiv}>
                        <Button className={classes.saveButton} variant="contained"  onClick={() => { onSave() }} disabled={isDisabled()}>שמור</Button>
                    </div>
                </div>

            }
        </>

    )
}

export default SectorModalBody