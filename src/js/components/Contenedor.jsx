import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Contenedor = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-12">
                        <Jumbotron />
                        <Card/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Contenedor;



