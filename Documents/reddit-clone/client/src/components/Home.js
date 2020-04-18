import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from  'react-bootstrap'
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


  create = ()=>{
    if(this.props.value.isLoggedIn === true){
    this.props.history.push('/post');}
    else{
      alert("Log in first");
      this.props.history.push("/login");
    }
  }

  createsub = () => {
    this.props.history.push('/createsub');
  }



  renderPost  = ({post_id,post_title,post_content,author,upvote,downvote}) =>
  <div className="outerbox">
    <div key = {post_id} className = "boxed">
      <br />
      <div>
        <div className="title">
          <Button className = "titlebutton" onClick={()=> this.props.history.push(`/posts/${post_id}`)}>{post_title}</Button>
        </div>
        <div className = "author">
          Posted by <Button  className = "authorbutton" onClick={() => this.props.history.push(`/users/${author}`)}>{author}</Button>
        </div>
      </div>
      <h4>{post_content}</h4>
      <div>
        <Button className = "votebutton">Upvotes:</Button>{upvote}  
        <br />                          
        <Button className = "votebutton">Downvotes:</Button>{downvote}
      </div>
    </div>
  </div>
  
  render() {
    const post= this.state.posts;
    var head = "Home";
    return (  
        <div >
          <Header value ={head}/>
          <br />
          <div className="outerbox">
            <Button onClick= {this.create} className="createbutton">Create New Post</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick= {this.createsub} className="createbutton">Create New Sub</Button>
          </div>
          {post.map(this.renderPost)}
        </div>
    );
  }
}

export default withRouter(Home);