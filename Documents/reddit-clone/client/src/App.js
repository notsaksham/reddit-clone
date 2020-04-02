import React, { Component } from 'react';
// import LoginForm from './components/form';
import NavBar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
//import { response } from 'express';
class App extends Component {
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

    // this.getPost = this.getPost.bind(this);
    // this.addUser = this.addUser.bind(this);
    // this.renderPost = this.renderPost.bind(this);
    // this.Renderthis = this.Renderthis.bind(this);
  }

  componentDidMount(){
    this.getPost();
  }

  getPost = _ =>{
    fetch('http://localhost:4000')
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
          {author}
        </div>
      </div>
      <h4>{post_content}</h4>
      <div>
        <br />
        <button className = "votebutton">Upvotes:</button>{upvote} 
        <br />                           
        <button className = "votebutton">Downvotes:</button>{downvote}
        <br />
      </div>
    </div>
    {/* <br /> */}
  </div>
  
  render() {
    const post= this.state.posts;
    return (
      <div  >
         <NavBar />
        {/* <LoginForm />   */}
        <div>
          {post.map(this.renderPost)}
        </div>
      </div>
    );
  }
}

export default App;