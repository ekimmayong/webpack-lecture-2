import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const ListItems = (props) => {
    const { primary, secondary } = props;
  return (
    <ListItem sx={{py: 0}}>
        <ListItemText primary={primary} secondary={secondary}/>
    </ListItem>
  )
}

export default ListItems