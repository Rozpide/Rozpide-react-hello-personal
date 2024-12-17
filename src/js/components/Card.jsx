import React from "react";

const Card = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Imagen de Ejemplo 1"  style={{ width: '100%', height: '215px', objectFit: 'cover' }}/>  
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Imagen de Ejemplo 2"  style={{ width: '100%', height: '215px', objectFit: 'cover' }} />  
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Imagen de Ejemplo 3" style={{ width: '100%', height: '215px', objectFit: 'cover' }}  />  
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Imagen de Ejemplo 4"  style={{ width: '100%', height: '215px', objectFit: 'cover' }} />  
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
