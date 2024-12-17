import React from "react";

const Jumbotron = () => {
    return (
        <>
            <div className="card mb-3 mt-3" style={{ backgroundColor: '#fff0f0', height: '300px',textAlign:'initial' }}>
                <div className="card-body" >
                    <h1 className="card-title"><strong>A Warm Welcome!</strong></h1>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quo at voluptates maxime provident, voluptatum id, rem, eveniet eius labore illo ipsam. Cupiditate ipsa, odit ipsam eum impedit dicta excepturi assumenda harum quos fugit deserunt.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;
