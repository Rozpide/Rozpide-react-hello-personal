import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";

import Contenedor from "./Contenedor.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
         <Navbar/>
		 <Contenedor/>
		 <Footer/>   	
		</>
	);
};

export default Home;