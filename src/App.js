import React from "react";
import {  Container } from "@mui/material";
import Header from "./common/header";
import Employees from "./components/employees";
import Grocery from "./components/grocery";
import Cars from "./components/cars";

const App = () => {
   
    return(
        <>
        <Header />
        <Container maxWidth="xl" sx={{marginTop: '4rem'}}>
            <Employees />

            <br/>
            <Grocery />

            <br />

            <Cars />
        </Container>
        </>
    )
}

export default App;