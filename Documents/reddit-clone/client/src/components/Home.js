import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header"

class Home extends Component {
  
  constructor(){
    super();
    this.state  ={
      posts:[]
    };
  }

  componentDidMount(){
    this.getPost();
    console.log(this.props.value)
  }

  getPost = _ =>{
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(response =>this.setState({posts:response.posts}))
      .catch(err => console.error(err)) 
  }

  // addUser=_ =>{

  // };


  create = ()=>{
    if(this.props.value.isLoggedIn === true){
    this.props.history.push('/post');}
  }

  renderPost  = ({post_id,post_title,post_content,author,upvote,downvote}) =>
  <div className="outerbox">
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
  </div>
  
  render() {
    const post= this.state.posts;
    var head = "Home";
    return (  
        <div >
          <Header value ={head}/>
          <button onClick= {this.create}>Create Post</button>
          {post.map(this.renderPost)}
        </div>
    );
  }
}

export default withRouter(Home);