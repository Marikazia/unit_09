import React, { useState, useEffect, Component } from "react";
import CommentsListHook from "./CommentsListHook";

export default function Comment2Hook() {
	// const [state, setState] = useState([]);

	// function selectHandler(event) {
	// 	console.log(event.target.value);
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/`+ event.target.value +`/comments`)
	// 		.then(response => response.json())
	// 		.then(state => {
	// 			console.log(state);
	// 			setState( state );
	// 	});
	// }
	const [data, setData] = useState([]);

	const selectHandler = (event) => {
		fetch("https://jsonplaceholder.typicode.com/users/1/posts")
		// fetch(`https://jsonplaceholder.typicode.com/posts/`+ event.target.value +`/comments`)
		.then((response) => response.json())
		.then((data) => {
			setData(data);
		});
	}

	return (
		<>
			<div>
				<p>Choose post ID:</p>
				<select onChange={selectHandler}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<div>
					<CommentsListHook data={data}/>
				</div>
			</div>
		</>
	)

}
