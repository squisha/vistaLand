import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DemoImg from './DemoImg';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#000000',
    },
    gridList: {
        width: 1100,
        height: 1000,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={300}  spacing={30} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"></ListSubheader>
                </GridListTile>
                {DemoImg.map((tile) => (
                    <GridListTile key={tile.img}>
                        <a href={tile.url}>
                        <img src={tile.img} alt={tile.title} className="MuiGridListTile-imgFullHeight" style={{ width: "100%" }} />
                        </a>
                        <GridListTileBar
                            title={tile.title}
                            actionIcon={
                                <Tooltip title={tile.info} placement="left-start" arrow>
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}