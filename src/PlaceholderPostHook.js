import React, { useEffect, useState } from "react";
import { Component } from "react";

//Class style
// export default class PlaceholderPostHook extends Component {
// 	constructor() {
// 		super();
// 		this.state = { data: [] };
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
// 			.then(response => response.json())
// 			.then(data => {
// 				console.log(data);
// 				this.setState({ data });
// 			});
// 	}

// 	render() {
// 		// let count = 1;
// 		return (
// 			<>
// 				{/* <section> */}
// 					{this.state.data.map((el, index) => (
// 						<section key={el.id}>
// 							<h2>{index+1}. {el.title}</h2>
// 							<p>{el.body}</p>
// 							</section>
// 						))}
// 					{/* <h2> Номер поста. Заголовок</h2>
// 					<p>Тело поста</p> */}
// 				{/* </section> */}
// 			</>
// 		)
// 	}
// }


//Func style
export default function PlaceholderPostHook() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1/posts')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				// this.setState({ data });
				setData(data);
			});
	}, []);

	return (
		<>
			{/* <section> */}
				{data.map(item => (
					<section key={item.id}>
						<h2> {item.id}. {item.title} </h2>,
						<p> {item.body} </p>
					</section>
				))};
			{/* </section> */}
		</>
	)
}
