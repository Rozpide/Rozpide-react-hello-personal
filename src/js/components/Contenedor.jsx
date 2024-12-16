import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Contenedor = () => {
    return (
		<>
			<div className="container">
				<Jumbotron/>
				<Card/>
			</div>   	
		</>
	);
}
export default Contenedor