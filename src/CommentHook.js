import { Component } from "react";

class CommentHook extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	selectHandler = (event) => {
		console.log(event.target.value);
		fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ data });
		});

	}

	render() {
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


}

export default CommentHook