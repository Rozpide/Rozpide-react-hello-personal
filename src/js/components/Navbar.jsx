
import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-aqua"> 
            <a className="navbar-brand" href="#"> 
                <img src="src/img/minimalist-logo-icono.jpg.png" alt="Logo" viewBox="0 2 18 18" className="logo-img" width="60" height="70"/> 
                
                
            </a> 
            <div className="collapse navbar-collapse justify-content-center btn-circle-dop" height="50"> 
                <ul className="navbar-nav"> 
                    <li className="nav-item"> 
                        <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="80" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
                         <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            </svg>
                            </a> 
                    </li> 
                </ul> 
            </div> 
                <button className="btn btn-circle bi bi-broadcast"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"   vertical-align='middle' text-align='center' fill="currentColor"  viewBox="0 2 18 18">
  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg></button> 
        </nav>
        </>
    );
}

export default Navbar;

/*import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-aqua">
      <a className="navbar-brand" href="#">
        <img src="logo.png" alt="Logo" className="logo-img"/>
        <span className="company-name">Nombre de la Empresa</span>
      </a>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Entrada</a>
          </li>
        </ul>
      </div>
      <button className="btn btn-circle">Acciones</button>
    </nav>
  );
};

export default Navbar;*/


