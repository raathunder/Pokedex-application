import React from 'react';
import Nav from '../components/Nav/';
import List from '../components/List/';
import Header from "../components/Header/Header";
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(2),
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
    
    }));

const Overview = () => {
    const classes = useStyles();
    return(
    
       <div className={classes.root}>
           <Header/>
           <div className={classes.content}>
               <div className={classes.toolbar}/>
                 <Nav />
               <List />
               </div>
            </div>
        
    )
};

export default Overview;