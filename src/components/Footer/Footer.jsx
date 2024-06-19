import React from "react";

export default props => {
	return(
		<>
		
		<div className="my-8 flex gap-3">
			<div className="text-white text-xl">{props.copy}</div>
			{/* aqui quero colocar links com nome de props */}
		</div>

		</>
	)
}