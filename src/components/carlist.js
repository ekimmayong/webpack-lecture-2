import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

class CarList extends Component {
    
    render() {
        console.log(this.props.cars)
        return (
        <List>
            {
                this.props.cars.map(data => {
                    return(
                        <>
                            <ListItem key={data.makeId}>
                                <ListItemText primary={data.makeName} />
                            </ListItem>
                        </>
                    )
                })
            }
        </List>
        )
    }
}

export default CarList