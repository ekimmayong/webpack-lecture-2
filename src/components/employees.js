import React, { useState, MouseEvent} from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, List, Popover, Typography } from '@mui/material';
import ListItems from '../common/listItem';
import data from '../data';


const Employees = () => {
    const { employees } = data;
    const [ popoverState, setPopoverState] = useState({
        openid: false,
        anchorEl: null
    });

    const open = Boolean(popoverState.anchorEl);
    const id = open ? 'pop over': undefined;

    const handlePopOverOpen=(event, id)=> {
        setPopoverState({
            ...popoverState,
            openid: id,
            anchorEl: event.target
        });
    }

    const handlePopOverClose =()=> {
        setPopoverState({
            ...popoverState,
            openid: false,
            anchorEl: null
        })
    }
  return (
    <>
        <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">1. Employees</Typography>
                </Grid>
            {
                employees && employees.map((data) => {
                    return (
                        <>
                        <Grid key={data.id} item >
                            <Card key={data.id} sx={{width: 150}} onMouseEnter={(e) => handlePopOverOpen(e, data.id)} onMouseLeave={handlePopOverClose}>
                                <CardMedia
                                    component='img'
                                    height='150'
                                    width='200'
                                    image={ data.imageUrl}
                                    alt='Employee Img'
                                />
                                <CardContent sx={{textAlign: 'center', bgcolor: '#dcdcdc'}}>
                                    <Typography variant='body1'>{data.name}</Typography>
                                    <Typography variant='body'>{data.designation}</Typography>
                                </CardContent>
                            </Card>

                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                pointerEvents: 'none',
                                }}
                                open={popoverState.openid === data.id}
                                anchorEl={popoverState.anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handlePopOverClose}
                                disableRestoreFocus
                            >
                                <Card>
                                    <CardHeader 
                                        title='Additional Information'
                                        titleTypographyProps={{
                                            variant: 'h6',
                                        }}
                                        sx={{bgcolor: '#efefef', py: '2px'}}
                                    />
                                    <CardContent sx={{padding: 0}}>
                                        <List sx={{padding: 0}}>
                                            <ListItems primary={data.department} secondary='Department'/>
                                            <ListItems primary={`$ ${data.salary}`} secondary='Salary'/>
                                            <ListItems primary={data.age} secondary='Age'/>
                                            <ListItems primary={data.dob} secondary='Date of Birth'/>
                                        </List>
                                    </CardContent>
                                </Card>
                            </Popover>
                        </Grid>
                            
                        </>
                    )
                })
            }
        </Grid>
    </>
  )
}

export default Employees