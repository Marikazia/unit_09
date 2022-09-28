import React, { useState, useEffect, Component } from "react";

function CommentHook() {
	const [data, setData] = useState([]);

	useEffect((event) => {
		fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				// this.setState({ data });
				setData( data );
			});
	}, []);


	return (
		<>
			<select onChange={this.event}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
	
		</>
	)

}

export default CommentHook