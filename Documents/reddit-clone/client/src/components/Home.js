import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  
  constructor(){
    super();
    this.state  ={
      posts:[],
      users:[],
      user:{
        Username:'Sample',
        Firstname:'Sample',
        Lastname:'Sample',
        Age:20
      }
    };
  }

  componentDidMount(){
    this.getPost();
  }

  getPost = _ =>{
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(response =>this.setState({posts:response.posts}))
      .catch(err => console.error(err)) 
  }

  // addUser=_ =>{

  // };


  renderPost  = ({post_id,post_title,post_content,author,upvote,downvote}) =>
  <div className="outerbox">
    {/* <br /> */}
    <div key = {post_id} className = "boxed">
      <br />
      <div>
        <div className="title">
          {post_title}
        </div>
        <div className = "author">
          Posted by {author}
        </div>
      </div>
      <h4>{post_content}</h4>
      <div>
        <button className = "votebutton">Upvotes:</button>{upvote} 
        <br />                           
        <button className = "votebutton">Downvotes:</button>{downvote}
      </div>
    </div>
    {/* <br /> */}
  </div>
  
  render() {
    const post= this.state.posts;
    return (
        <div >
          {post.map(this.renderPost)}
        </div>
    );
  }
}

export default Home;