import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Contenedor = () => {
    return (
		<>
			<div className="container col-12">
				<Jumbotron/>
				<Card/>
			</div>   	
		</>
	);
}
export default Contenedor