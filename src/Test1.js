import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
		console.log(this.state);
  }


  render() {
    return (
      <div>
        <h1>Привіт, світе!</h1>
        {/* <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}

export default Test1;



render() {
	return ReactDOM.createPortal(	
		this.props.children, 
		this.el
		 );
}