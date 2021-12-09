import React from 'react'
import Grid from '@mui/material/Grid'

export const List = (props) => {
    const listItems = props.children || []
    return (
       <Grid container spacing={2}>
           {listItems.map((element, id) => {
               return <Grid key={`${id}-list-item`} item lg={3} md={6} xs={12}>{element}</Grid>
           })}
       </Grid>
    )
}
