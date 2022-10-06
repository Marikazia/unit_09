import React, { useState, useEffect, Component } from "react";
// import Comment2Hook from "./Comment2Hook";

export default function CommentsListHook(props) {
	// const [state, setState] = useState([]);


	// function onlyEven(event) {
	// 	console.log(event.target.value);
	// 	fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
	// 		.then(response => response.json())
	// 		.then(state => {
	// 			console.log(state);
	// 			setState( state );
	// 	});
	// }
	// const [state, setState] = useState([]);

	// function selectHandler(event) {
	// 	console.log(event.target.value);
	// 	fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
	// 		.then(response => response.json())
	// 		.then(state => {
	// 			console.log(state);
	// 			setState( state );
	// 	});
	// }
	console.log(props);
	return (
		<div>
			{/* <div>
				<button onClick={onlyEven}>Only even comments</button>
			</div> */}
			{props.map((el, index) => (
				<section key={el.id}>
					<p><b>{index + 1}. {el.email}</b></p>
					<p>{el.body}</p>
				</section>
			))}
		</div>
	)
}