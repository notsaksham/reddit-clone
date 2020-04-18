import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Header'

class Users extends Component{

  constructor(){
      super();
      this.state={
          posts:[]
      }
  }
    
  componentDidMount(){
      this.getPost();
  }
    
  getPost = _ =>{
    var user = this.props.match.params.username;
    fetch(`http://localhost:4000/post/${user}`)
    .then(response => response.json())
    .then(response =>this.setState({posts:response.posts}))
    .catch(err => console.error(err)) 
    
  }
      
  renderPost  = ({post_id,post_title,post_content,author,upvote,downvote}) =>
    <div className="outerbox">
      <div key = {post_id} className = "boxed">
        <br />
        <div className="title">
          <Button className = "titlebutton" onClick={()=> this.props.history.push(`/posts/${post_id}`)}>{post_title}</Button>
        </div>
        <div className = "author">
          Posted by <Button className = "authorbutton" onClick={() => this.props.history.push(`/users/${author}`)}>{author}</Button>
        </div>
        <h4>{post_content}</h4>
        <div>
          <Button className = "votebutton">Upvotes:</Button>{upvote} 
          <br />                           
          <Button className = "votebutton">Downvotes:</Button>{downvote}
        </div>
      </div>
    </div>


    render(){
        var user = this.props.match.params.username;
        const post= this.state.posts;
        return(
            <div>
                <Header value ={user}/>
                {post.map(this.renderPost)}    
            </div>
        )
    }
}

export default withRouter(Users);