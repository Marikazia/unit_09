import React, { useState, useEffect, Component } from "react";

export default function CommentHook() {
	const [state, setState] = useState([]);

	// useState((event) => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts/'+ event.target.value + '/comments')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			console.log(data);
	// 			// this.setState({ data });
	// 			setData( data );
	// 		});
	// }, []);

	function selectHandler(event) {
		console.log(event.target.value);
		fetch("https://jsonplaceholder.typicode.com/posts/"+ event.target.value +"/comments")
			.then(response => response.json())
			.then(state => {
				console.log(state);
				setState( state );
		});
	}

	return (
		<>
			<section>
				{/* {data.map(item => ( */}
					<select onChange={selectHandler}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>,

				{/* ))} */}

				<div>
					{state.map(item => (
						<section key={item.id}>
							<p><b>{item.id}. {item.email}</b></p>
							<p>{item.body}</p>
						</section>
					))}
				</div>

				{/* <div>
					{data.map((el, index) => (
						<section key={el.id}>
							<p><b>{index + 1}. {el.email}</b></p>
							<p>{el.body}</p>
						</section>
					))}
				</div> */}

			</section>


			{/* <select onChange={this.event}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select> */}
	
		</>
	)

}

// export default CommentHook