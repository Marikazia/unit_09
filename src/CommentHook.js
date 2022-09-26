import { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

// class CommentHook extends Component {
// 	constructor() {
// 		super();
// 		this.state = { data: [] };
// 	}

// 	selectHandler = (event) => {
// 		console.log(event.target.value);
// 		fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log(data);
// 				this.setState({ data });
// 		});

// 	}

// 	render() {
// 		return (
// 			<>
// 				<select onChange={this.selectHandler}>

// 					<option value="1">1</option>
// 					<option value="2">2</option>
// 					<option value="3">3</option>
// 					<option value="4">4</option>

// 				</select>
			
// 			</>
// 		)
// 	}
// }

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
	});



	return (

		<>
			<select onChange={this.selectHandler}>

				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>

			</select>
		
		</>

	)

}

export default CommentHook