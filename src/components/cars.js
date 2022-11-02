import { Typography } from '@mui/material';
import React, { Component } from 'react'
import CarList from './carlist';

class Cars extends Component {
    constructor(props){
        super(props);

        this.state = {
            cars: [
                {
                    makeId: 11897,
                    makeName: " MID-TOWN TRAILERS"
                },
                {
                    makeId: 4877,
                    makeName: "1/OFF KUSTOMS, LLC"
                },
                {
                    makeId: 11257,
                    makeName: "102 IRONWORKS, INC."
                },
                {
                    makeId: 6387,
                    makeName: "17 CREEK ENTERPRISES"
                },
                {
                    makeId: 9172,
                    makeName: "1M CUSTOM CAR TRANSPORTS, INC."
                },
                {
                    makeId: 6124,
                    makeName: "1ST CHOICE MANUFACTURING INC"
                },
                {
                    makeId: 6488,
                    makeName: "2-G TRAILER CO LLC"
                },
                {
                    makeId: 612,
                    makeName: "2231545 ONTARIO"
                },
                {
                    makeId: 11399,
                    makeName: "24/7 ONSITE CAMERAS INC"
                },
                {
                    makeId: 608,
                    makeName: "280 TRAILERS"
                },]
        }
    }

  render() {
    return (
      <>
        <Typography variant='h4'>3. Cars</Typography>
        <CarList cars={this.state.cars} />
      </>
    )
  }
}

export default Cars