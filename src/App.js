
import './App.css';
import CommentHook from './CommentHook';
import PlaceholderPostHook from './PlaceholderPostHook';
// import Test1 from './Test1';
import Comment2Hook from './Comment2Hook';

export default function App() {



  return (
    <>
		
			{/* <Test1/> */}
			{/* console.log(this.state) */}

			<PlaceholderPostHook />
			<CommentHook />
			<Comment2Hook />
			
    </>
  );

}


