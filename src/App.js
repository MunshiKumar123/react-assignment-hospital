import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Style from "./Style.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Service from "./Service";
import Details from "./Details";
import Api from './Api';
import From from "./Form";
import Footer from "./Footer";


const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Service />
            <Details />
            <Api />
            <From />
            <Footer />

        </>
    )
}

export default App;