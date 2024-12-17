import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Contenedor = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-12" style={{width:'1270px'}}>
                        <Jumbotron />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contenedor;

