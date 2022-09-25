import { Component } from "react";


class PlaceholderPostHook extends Component {
	constructor() {
		super();
		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.state = {
					data: []
				}
			})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			this.setState({ data });
		});
	}

	render() {
		return (
			<>
				<section>
					<h2> Номер поста. Заголовок</h2>
					<p>Тело поста</p>
				</section>
			</>
		)
	}


}

export default PlaceholderPostHook;