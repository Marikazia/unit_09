import React, { useState, useEffect, Component } from "react";

export default function CommentHook() {
	// const [state, setState] = useState([]); //data!!!!

	// function selectHandler(event) {
	// 	console.log(event.target.value);
	// 	fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
	// 		.then(response => response.json())
	// 		.then(state => {
	// 			console.log(state);
	// 			setState( state );
	// 	});
	// }

	return (
		<>
			<section>
				<select onChange={selectHandler}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<div>
					{state.map(item => (
						<section key={item.id}>
							<p><b>{item.id}. {item.email}</b></p>
							<p>{item.body}</p>
						</section>
					))}
				</div>
			</section>	
		</>
	)

}
