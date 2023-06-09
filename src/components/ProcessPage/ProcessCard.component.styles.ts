import { Theme, createStyles, makeStyles } from "@material-ui/core";

const drawerWidth = 240;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display:'flex', flexDirection:'column', alignItems:'center'
        },
        card:{
            width:'95%', boxShadow: '0px 0px 8px 1px #888888'
        },
        cardContent:{
            height: '56px', display: 'flex', justifyContent: 'space-between'
        },
        rightDescription:{
            width: '50%', marginTop: '-10px'
        },
        leftDescription:{
            width: '50%', marginRight: '15px', marginTop: '-10px'
        },
        devider:{
            marginTop: '5px'
        },
        cardActions:{
            justifyContent: 'space-between',  marginTop: '-4px', height: '15px'
        }
    }),
);

export {useStyles}

