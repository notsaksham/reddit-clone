import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
      <div>
        <div className="title">
          {post_title}
        </div>
        <div className = "author">
          Posted by <Link to = {`/users/${author}`}>{author}</Link>
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

export default Users